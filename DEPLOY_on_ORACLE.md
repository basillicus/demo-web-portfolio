✦ Great question! You can deploy your SvelteKit portfolio website to OCI using several
  approaches. Here are the best options for deploying your static site on Oracle Cloud
  Infrastructure:

  Option 1: OCI Object Storage + CDN (Simplest & Most Cost-Effective)

  Step 1: Build Your Static Site

   1 # In your project directory
   2 cd /home/david/web/portfolio/qwen/portfolio
   3 npm run build

  This creates a build/ directory with your static files.

  Step 2: Set Up OCI Object Storage

   1. Log into OCI Console
   2. Create Bucket:
      - Navigate to Storage → Object Storage & Archive → Buckets
      - Click Create Bucket
      - Name: portfolio-website (must be globally unique)
      - Visibility: Public
      - Leave other settings as default

   3. Upload Files:
      - Click your new bucket
      - Click Upload
      - Select all files from your build/ directory
      - Make sure to upload the entire folder structure
      - Set Visibility to Public for all files

  Step 3: Configure Static Website Hosting

   1. Enable Static Website:
      - In your bucket, click Edit Visibility
      - Enable Static Website
      - Index page: index.html
      - Error page: index.html (for SPA routing)

   2. Note the Endpoint:
      - You'll get a URL like: https://objectstorage.us-phoenix-1.oraclecloud.com/n/nam
        espace/b/bucket-name/o/index.html
      - Or a shorter version:
        https://bucket-name.objectstorage.region.oraclecloudcontent.com

  Step 4: Set Up Custom Domain (Optional but Recommended)

   1. Create DNS Zone in OCI (or use existing provider)
   2. Add CNAME Record pointing to your bucket endpoint
   3. Configure SSL Certificate through OCI or Let's Encrypt

  Option 2: OCI Compute Instance (More Control)

  Step 1: Create Compute Instance

   1. OCI Console → Compute → Instances → Create Instance
   2. Always Free Eligible:
      - Shape: VM.Standard.E2.1.Micro
      - Image: Ubuntu 22.04 LTS
   3. Networking: Use default VCN or create new
   4. SSH Key: Add your public key

  Step 2: Install NGINX Web Server

    1 # SSH into your instance
    2 ssh ubuntu@your-instance-public-ip
    3 
    4 # Update system
    5 sudo apt update && sudo apt upgrade -y
    6 
    7 # Install NGINX
    8 sudo apt install nginx -y
    9 
   10 # Start and enable NGINX
   11 sudo systemctl start nginx
   12 sudo systemctl enable nginx

  Step 3: Deploy Your Website Files

    1 # Build your site locally
    2 cd /home/david/web/portfolio/qwen/portfolio
    3 npm run build
    4 
    5 # Copy files to your OCI instance (from your local machine)
    6 scp -r build/* ubuntu@your-instance-ip:/tmp/portfolio/
    7 
    8 # On OCI instance, move files to web directory
    9 sudo mv /tmp/portfolio/* /var/www/html/
   10 sudo chown -R www-data:www-data /var/www/html/
   11 sudo chmod -R 755 /var/www/html/

  Step 4: Configure NGINX

  Create /etc/nginx/sites-available/portfolio:

    1 server {
    2     listen 80;
    3     server_name your-domain.com;  # or your instance IP
    4     
    5     root /var/www/html;
    6     index index.html;
    7     
    8     location / {
    9         try_files $uri $uri/ /index.html;
   10     }
   11     
   12     # Security headers
   13     add_header X-Frame-Options "SAMEORIGIN" always;
   14     add_header X-XSS-Protection "1; mode=block" always;
   15     add_header X-Content-Type-Options "nosniff" always;
   16     
   17     # Compression
   18     gzip on;
   19     gzip_vary on;
   20     gzip_min_length 1024;
   21     gzip_types text/plain text/css text/xml text/javascript
      application/javascript application/xml+rss application/json;
   22 }

  Enable the site:

   1 sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   2 sudo rm /etc/nginx/sites-enabled/default
   3 sudo nginx -t
   4 sudo systemctl reload nginx

  Option 3: OCI Container Instances (Modern Approach)

  Step 1: Containerize Your Application

  Create Dockerfile in your project root:

    1 FROM node:18-alpine as builder
    2 
    3 WORKDIR /app
    4 COPY package*.json ./
    5 RUN npm ci --only=production
    6 
    7 COPY . .
    8 RUN npm run build
    9 
   10 FROM caddy:2-alpine
   11 
   12 COPY --from=builder /app/build /usr/share/caddy
   13 COPY Caddyfile /etc/caddy/Caddyfile
   14 
   15 EXPOSE 80

  Create Caddyfile:

    1 :80 {
    2     root * /usr/share/caddy
    3     encode gzip
    4     file_server
    5     try_files {path} /index.html
    6     
    7     # Security headers
    8     header {
    9         X-Frame-Options SAMEORIGIN
   10         X-XSS-Protection "1; mode=block"
   11         X-Content-Type-Options nosniff
   12     }
   13 }

  Step 2: Build and Push to OCI Registry

   1 # Build image
   2 docker build -t portfolio-site .
   3 
   4 # Tag for OCI
   5 docker tag portfolio-site
     phx.ocir.io/your-tenancy/your-repo/portfolio-site:latest
   6 
   7 # Push to OCI Container Registry
   8 docker push phx.ocir.io/your-tenancy/your-repo/portfolio-site:latest

  Step 3: Deploy Container Instance

   1. OCI Console → Developer Services → Container Instances
   2. Create Container Instance:
      - Name: portfolio-container
      - Shape: VM.Standard.E2.1.Micro (Always Free)
      - Image: Your pushed image
      - Ports: 80
      - Networking: Attach to existing VCN

  Option 4: Automated Deployment with GitHub Actions

  Create .github/workflows/deploy.yml:

    1 name: Deploy to OCI
    2 
    3 on:
    4   push:
    5     branches: [main]
    6 
    7 jobs:
    8   deploy:
    9     runs-on: ubuntu-latest
   10 
   11     steps:
   12     - uses: actions/checkout@v3
   13 
   14     - name: Setup Node.js
   15       uses: actions/setup-node@v3
   16       with:
   17         node-version: '18'
   18 
   19     - name: Install dependencies
   20       run: |
   21         cd portfolio
   22         npm ci
   23 
   24     - name: Build static site
   25       run: |
   26         cd portfolio
   27         npm run build
   28 
   29     - name: Deploy to OCI Object Storage
   30       uses: oracle-actions/upload-to-oci-object-storage@v1
   31       with:
   32         tenancy: ${{ secrets.OCI_TENANCY }}
   33         region: ${{ secrets.OCI_REGION }}
   34         fingerprint: ${{ secrets.OCI_FINGERPRINT }}
   35         key-content: ${{ secrets.OCI_KEY_CONTENT }}
   36         user: ${{ secrets.OCI_USER }}
   37         bucket-name: portfolio-website
   38         namespace: ${{ secrets.OCI_NAMESPACE }}
   39         source-folder: portfolio/build
   40         destination-prefix: ''

  Recommended Approach: OCI Object Storage + Custom Domain

  For your portfolio, I recommend Option 1 (Object Storage) because:

  Advantages:
   1. Zero Server Costs - Completely free with Always Free tier
   2. High Performance - Built-in CDN capabilities
   3. Auto Scaling - Handles traffic spikes automatically
   4. Global Distribution - OCI's edge network
   5. No Maintenance - No server patching or updates
   6. 99.95% SLA - Enterprise-grade reliability

  Implementation Steps:

   1. Build and Upload:

   1    # Build site
   2    cd /home/david/web/portfolio/qwen/portfolio
   3    npm run build
   4 
   5    # Upload to Object Storage (manual or scripted)

   2. Configure CORS (for API calls):

   1    [
   2      {
   3        "allowedMethods": ["GET"],
   4        "allowedOrigins": ["*"],
   5        "allowedHeaders": ["*"],
   6        "exposedHeaders": ["ETag", "Content-Length"],
   7        "maxAgeSeconds": 3000
   8      }
   9    ]

   3. Set Up Custom Domain:
      - Point DNS to your bucket endpoint
      - Use OCI DNS or your domain registrar
      - Optional: Add SSL certificate

   4. Automate Deployments:
      - Use GitHub Actions or simple script to rebuild and upload

  This approach gives you a blazing-fast, completely free (within Always Free
  limits), and maintenance-free portfolio site hosted on enterprise-grade Oracle
  infrastructure!

