# Kyiv Online - Production Deployment Guide

## Current Status

✅ **Application**: Running via PM2 on port 3001
✅ **Build**: Production build created and optimized
✅ **Process Manager**: PM2 configured for auto-restart and monitoring
✅ **Web Server**: Nginx configuration ready for reverse proxy

---

## Architecture

```
Internet (HTTPS)
    ↓
Nginx Reverse Proxy (Port 80/443)
    ↓
PM2 Process Manager
    ↓
Next.js Application (Port 3001)
    ↓
Node.js Runtime
```

---

## PM2 Service Configuration

**Process Name**: `kievonline-next`
**Port**: 3001
**Config File**: `/var/www/kievonline.net/kievonline.net/ecosystem.config.js`

### View Service Status
```bash
pm2 status
pm2 logs kievonline-next
pm2 monit
```

### Restart Service
```bash
pm2 restart kievonline-next
```

### Stop Service
```bash
pm2 stop kievonline-next
```

### Start Service
```bash
pm2 start ecosystem.config.js
```

---

## Nginx Configuration

**Location**: `/etc/nginx/sites-available/kievonline.net` (ready to deploy)
**Template**: `/tmp/kievonline.nginx.conf`

### To Enable (requires sudo):
```bash
sudo cp /tmp/kievonline.nginx.conf /etc/nginx/sites-available/kievonline.net
sudo ln -s /etc/nginx/sites-available/kievonline.net /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Features
- ✅ HTTP → HTTPS redirect
- ✅ Reverse proxy to Node.js (3001)
- ✅ Gzip compression
- ✅ Static file caching (1 year)
- ✅ SSL/TLS ready (uncomment certificates when available)
- ✅ Keep-alive connections
- ✅ Proper X-Forwarded headers

---

## SSL/TLS Setup

The nginx config is ready for HTTPS. Once you have certificates:

1. **Obtain Certificates** (Let's Encrypt recommended):
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot certonly --standalone -d kievonline.net -d www.kievonline.net
   ```

2. **Update nginx config** with certificate paths:
   ```nginx
   ssl_certificate /etc/letsencrypt/live/kievonline.net/fullchain.pem;
   ssl_certificate_key /etc/letsencrypt/live/kievonline.net/privkey.pem;
   ```

3. **Reload nginx**:
   ```bash
   sudo systemctl reload nginx
   ```

---

## Logging

### PM2 Logs
```bash
# Real-time logs
pm2 logs kievonline-next

# Error logs
tail -f /var/www/kievonline.net/logs/error.log

# Output logs
tail -f /var/www/kievonline.net/logs/out.log

# Combined logs
tail -f /var/www/kievonline.net/logs/combined.log
```

### Nginx Logs
```bash
# Access logs
tail -f /var/www/kievonline.net/logs/nginx-access.log

# Error logs
tail -f /var/www/kievonline.net/logs/nginx-error.log
```

---

## Monitoring

### Health Check
```bash
# Check if service is running on port 3001
curl http://localhost:3001

# Check Nginx reverse proxy
curl http://127.0.0.1

# Expected response: HTML homepage
```

### CPU & Memory
```bash
# Real-time monitoring
pm2 monit

# Process info
pm2 show kievonline-next

# System resources
htop
```

---

## Auto-Start Configuration

The application is configured to auto-start on server reboot via PM2:

```bash
# To verify auto-start is enabled
pm2 status

# To re-enable if needed
pm2 startup systemd -u sudno --hp /home/sudno
pm2 save
```

---

## Scaling (Future)

To run multiple instances (load balancing):

1. **Update ecosystem.config.js**:
   ```javascript
   instances: 4,  // or use -1 for number of CPUs
   exec_mode: 'cluster',
   ```

2. **Restart PM2**:
   ```bash
   pm2 restart ecosystem.config.js
   ```

Nginx will automatically load-balance across instances.

---

## Deployment Checklist

- [x] Production build created
- [x] PM2 configured and running
- [x] Port 3001 serving Next.js app
- [x] Nginx reverse proxy configured
- [ ] SSL/TLS certificates installed
- [ ] Nginx enabled and reloaded
- [ ] DNS pointing to server IP
- [ ] Domain (kievonline.net) accessible
- [ ] Health checks passing
- [ ] Logs monitored

---

## Troubleshooting

### Service won't start
```bash
pm2 logs kievonline-next  # Check logs for errors
npm run build              # Rebuild if needed
pm2 start ecosystem.config.js --watch
```

### Port already in use
```bash
lsof -i :3001
kill -9 <PID>
pm2 start ecosystem.config.js
```

### Nginx connection refused
```bash
sudo nginx -t              # Test config
sudo systemctl status nginx # Check if running
sudo systemctl start nginx
```

### High memory usage
```bash
# Check process memory
pm2 show kievonline-next

# Restart to clear memory
pm2 restart kievonline-next

# Update max_memory_restart in ecosystem.config.js if needed
```

---

## Performance Optimization

### Current Setup
- Next.js with SSG (Static Site Generation)
- Gzip compression enabled in Nginx
- Static file caching (1 year)
- Keep-alive connections

### Further Optimization
1. **Enable CDN** for static assets
2. **Add Redis** for caching
3. **Implement** service workers for offline support
4. **Monitor** Core Web Vitals with tools like PageSpeed Insights

---

## Backup & Restore

### Backup Application
```bash
tar -czf kievonline-backup.tar.gz /var/www/kievonline.net/
cp kievonline-backup.tar.gz /backup/location/
```

### Backup PM2 Configuration
```bash
pm2 save
cp ~/.pm2/dump.pm2 /backup/location/
```

### Restore
```bash
tar -xzf kievonline-backup.tar.gz -C /
pm2 start /var/www/kievonline.net/kievonline.net/ecosystem.config.js
```

---

## Environment Variables

Currently using defaults. To add custom environment variables:

1. **Update ecosystem.config.js**:
   ```javascript
   env: {
     NODE_ENV: 'production',
     PORT: 3001,
     CUSTOM_VAR: 'value',
   }
   ```

2. **Restart PM2**:
   ```bash
   pm2 restart ecosystem.config.js
   ```

---

## Database Integration (Future)

When adding database features:

1. **Install driver** (e.g., PostgreSQL):
   ```bash
   npm install pg
   ```

2. **Set connection string**:
   ```bash
   export DATABASE_URL="postgresql://user:pass@localhost/kievonline"
   ```

3. **Update ecosystem.config.js** to include env variables

4. **Restart PM2**:
   ```bash
   pm2 restart ecosystem.config.js
   ```

---

## Security Hardening

### Current Security
- ✅ HTTPS ready (certificates needed)
- ✅ Gzip compression
- ✅ X-Forwarded headers configured
- ✅ Node.js running as non-root user

### Recommended Additions
1. **Rate limiting** in Nginx
2. **WAF** (Web Application Firewall)
3. **DDoS protection** (CloudFlare)
4. **Security headers** (HSTS, CSP, etc.)
5. **Regular updates** of dependencies

---

## Monitoring & Alerts

### PM2 Plus (Optional)
For real-time monitoring and alerts:
```bash
pm2 web              # Start web dashboard (port 9615)
pm2 plus             # Connect to PM2 Plus cloud
```

### Custom Monitoring
Monitor logs for errors:
```bash
# Check error rate
grep -c "ERROR" /var/www/kievonline.net/logs/error.log

# Alert on high memory
pm2 trigger kievonline-next "memory > 500mb"
```

---

## Maintenance Schedule

- **Daily**: Check PM2 logs for errors
- **Weekly**: Review application performance
- **Monthly**: Update dependencies (`npm update`)
- **Quarterly**: Security audit and SSL certificate renewal
- **Annually**: Full system backup and disaster recovery test

---

## Support Commands

```bash
# Show all processes
pm2 list

# Show detailed process info
pm2 info kievonline-next

# Show PM2 config
pm2 show kievonline-next

# Export PM2 config
pm2 dump

# Start with specific config
pm2 start ecosystem.config.js --name=kievonline-next

# Kill all processes
pm2 kill

# Delete all processes
pm2 delete all
```

---

## Next Steps

1. **Install SSL Certificates** (Let's Encrypt)
2. **Enable Nginx** with the configuration
3. **Point DNS** to your server IP
4. **Test** https://kievonline.net
5. **Monitor** logs and performance
6. **Scale** if needed (add more PM2 instances)

---

## Contact & Support

For issues or questions:
- Check PM2 logs: `pm2 logs kievonline-next`
- Check Nginx logs: `/var/www/kievonline.net/logs/nginx-error.log`
- Review build output: `.next/` directory

---

**Deployment Date**: 2025-11-30
**Application Version**: 0.1.0
**Node.js Runtime**: v22.19.0
**Next.js Version**: 16.0.5
**Status**: Ready for Production ✅
