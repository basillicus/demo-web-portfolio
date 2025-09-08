 OCI Always Free Resources for Umami

  Available Always Free Resources:
   - 2 AMD Compute Instances (1 OCPU, 1 GB RAM each)
   - Oracle Autonomous Database (up to 20 GB)
   - Load Balancer (10 Mbps)
   - Object Storage (10 GB)

  Option 1: Docker on OCI Compute Instance

  Step 1: Provision OCI Compute Instance

   1. Create Always Free Compute Instance:
      - Shape: VM.Standard.E2.1.Micro (Always Free eligible)
      - OS: Ubuntu 22.04 LTS
      - SSH key for access

   2. Configure Security List to allow:
      - HTTP (port 80)
      - HTTPS (port 443)
      - Umami admin (port 3000)
      - SSH (port 22)

  Step 2: Install Docker on OCI Instance

    1 # SSH into your OCI instance
    2 ssh ubuntu@your-instance-public-ip
    3 
    4 # Update system
    5 sudo apt update && sudo apt upgrade -y
    6 
    7 # Install Docker
    8 curl -fsSL https://get.docker.com -o get-docker.sh
    9 sudo sh get-docker.sh
   10 
   11 # Install Docker Compose
   12 sudo curl -L
      "https://github.com/docker/compose/releases/download/v2.20.0/docker-compos
      e-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   13 sudo chmod +x /usr/local/bin/docker-compose
   14 
   15 # Add user to docker group
   16 sudo usermod -aG docker ubuntu

  Step 3: Deploy Umami with PostgreSQL

  Create docker-compose.yml:

    1 version: '3.8'
    2 services:
    3   umami:
    4     image: ghcr.io/umami-software/umami:postgresql-latest
    5     ports:
    6       - "3000:3000"
    7     environment:
    8       DATABASE_URL: postgresql://umami:umami@db:5432/umami
    9       DATABASE_TYPE: postgresql
   10       APP_SECRET: your-long-random-secret-here
   11     depends_on:
   12       db:
   13         condition: service_healthy
   14     restart: unless-stopped
   15 
   16   db:
   17     image: postgres:15-alpine
   18     environment:
   19       POSTGRES_DB: umami
   20       POSTGRES_USER: umami
   21       POSTGRES_PASSWORD: umami
   22     volumes:
   23       - umami-db-data:/var/lib/postgresql/data
   24     healthcheck:
   25       test: ["CMD-SHELL", "pg_isready -U $${POSTGRES_USER}"]
   26       interval: 5s
   27       timeout: 5s
   28       retries: 5
   29     restart: unless-stopped
   30 
   31 volumes:
   32   umami-db-data:

  Step 4: Start Services

   1 # Start Umami
   2 docker-compose up -d
   3 
   4 # Check status
   5 docker-compose ps

  Option 2: Use Oracle Autonomous Database (Recommended)

  Since Oracle provides a free Autonomous Database, you can use it instead of
  PostgreSQL container:

  Step 1: Create Autonomous Database

   1. OCI Console → Autonomous Database → Create Autonomous Database
   2. Always Free resources
   3. Workload Type: Transaction Processing (ATP)
   4. Database Name: umami_db
   5. Admin Password: Strong password
   6. License: Bring Your Own License (BYOL)
   7. Access Control: Allowlist your compute instance IP

  Step 2: Configure Umami to Use Oracle DB

  Create docker-compose.oracle.yml:

    1 version: '3.8'
    2 services:
    3   umami:
    4     image: ghcr.io/umami-software/umami:postgresql-latest
    5     ports:
    6       - "3000:3000"
    7     environment:
    8       DATABASE_URL:
      oracle://admin:your_admin_password@your_db_endpoint:1521/your_db_service_n
      ame
    9       DATABASE_TYPE: oracle
   10       APP_SECRET: your-long-random-secret-here
   11     restart: unless-stopped

  Note: Umami primarily supports PostgreSQL and MySQL. You might need to use a
  PostgreSQL-compatible mode or consider using the PostgreSQL container option with
  persistent storage.

  Option 3: Optimized Setup for Limited Resources

  Given the 1GB RAM limitation, here's an optimized setup:

  Use SQLite Version (Lightweight)

  Create docker-compose.light.yml:

    1 version: '3.8'
    2 services:
    3   umami:
    4     image: ghcr.io/umami-software/umami:sqlite-latest
    5     ports:
    6       - "3000:3000"
    7     environment:
    8       DATABASE_URL: sqlite://./umami.db
    9       DATABASE_TYPE: sqlite
   10       APP_SECRET: your-long-random-secret-here
   11     volumes:
   12       - ./umami-data:/app/db
   13     restart: unless-stopped

  Configuration for Your Portfolio

  Update src/app.html with your OCI Umami endpoint:

   1 <!-- Umami Analytics -->
   2 <script async defer data-website-id="YOUR_WEBSITE_ID" src=
     "http://your-oci-instance-ip:3000/script.js"></script>

  Security Considerations

  1. SSL/TLS for HTTPS

   1 # Install Caddy for automatic SSL
   2 sudo snap install caddy
   3 
   4 # Caddyfile
   5 your-domain.com {
   6   reverse_proxy localhost:3000
   7   tls your@email.com
   8 }

  2. Firewall Configuration

   1 # Only allow necessary ports
   2 sudo ufw enable
   3 sudo ufw allow ssh
   4 sudo ufw allow 'Nginx Full'

  3. Environment Variables
  Create .env.production:

   1 DATABASE_URL=postgresql://umami:strong-password@localhost:5432/umami
   2 APP_SECRET=your-very-long-secret-key-here
   3 HASH_SALT=another-random-salt

  Benefits of OCI + Umami Combination

   1. Completely Free - Uses Always Free tier
   2. Production Ready - Enterprise-grade infrastructure
   3. Scalable - Easy to upgrade when needed
   4. Secure - Built-in OCI security features
   5. Reliable - 99.95% SLA for Always Free resources
   6. Global - Multiple region availability

  Resource Monitoring

  OCI provides excellent monitoring:
   - CPU/Memory usage
   - Network traffic
   - Disk I/O
   - Database performance

  This setup will give you a fully functional, self-hosted Umami analytics solution
  running on Oracle's Always Free tier, with enterprise-grade reliability and
  security, all at zero cost!
