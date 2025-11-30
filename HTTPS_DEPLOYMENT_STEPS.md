# HTTPS Deployment Steps for Kyiv Online

## Current Status ✅

- **Application**: Running on PM2 (port 3001)
- **Domain**: kievonline.net resolves to 167.235.10.212
- **Nginx Config**: Ready at `/tmp/kievonline.nginx.conf`
- **SSL Certificates**: Not yet installed

---

## Step-by-Step Deployment

### Step 1: Install Certbot (Let's Encrypt)

Install the tools needed to obtain SSL certificates:

```bash
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx
```

---

### Step 2: Obtain SSL Certificates

Request free SSL certificates for your domain(s):

```bash
sudo certbot certonly --standalone \
  -d kievonline.net \
  -d www.kievonline.net \
  --agree-tos \
  --no-eff-email \
  --email your-email@example.com
```

**This command will:**
- Create certificates in `/etc/letsencrypt/live/kievonline.net/`
- Display paths to:
  - `fullchain.pem` (SSL certificate)
  - `privkey.pem` (Private key)

**Save these paths for Step 4.**

---

### Step 3: Copy Nginx Configuration

Copy the prepared Nginx configuration to the active directory:

```bash
sudo cp /tmp/kievonline.nginx.conf /etc/nginx/sites-available/kievonline.net
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/kievonline.net /etc/nginx/sites-enabled/kievonline.net
```

Test the configuration (should show "successful"):

```bash
sudo nginx -t
```

---

### Step 4: Update Nginx with Certificate Paths

Edit the Nginx configuration to add your certificate paths:

```bash
sudo nano /etc/nginx/sites-available/kievonline.net
```

Find these lines (around line 20-22):

```nginx
    # ssl_certificate /etc/ssl/certs/kievonline.net.crt;
    # ssl_certificate_key /etc/ssl/private/kievonline.net.key;
```

Replace with your actual certificate paths (from Step 2):

```nginx
    ssl_certificate /etc/letsencrypt/live/kievonline.net/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/kievonline.net/privkey.pem;
```

Also uncomment the SSL protocol lines:

```nginx
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
```

Save and exit (Ctrl+X, then Y, then Enter in nano).

Test again:

```bash
sudo nginx -t
```

---

### Step 5: Reload Nginx

Activate the configuration:

```bash
sudo systemctl reload nginx
```

Check that Nginx is running:

```bash
sudo systemctl status nginx
```

---

### Step 6: Test HTTPS Access

Test your HTTPS connection (should show HTML homepage):

```bash
curl -k https://kievonline.net 2>/dev/null | head -20
```

Or access in browser:

```
https://kievonline.net
```

---

### Step 7: Auto-Renewal Setup

Let's Encrypt certificates expire after 90 days. Set up automatic renewal:

```bash
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

Check renewal is scheduled:

```bash
sudo systemctl status certbot.timer
```

---

## Verification Checklist

Run these commands to verify everything is working:

```bash
# 1. Check PM2 is running
pm2 status

# 2. Check port 3001 is listening
lsof -i :3001

# 3. Check Nginx is running
sudo systemctl status nginx

# 4. Check certificate validity
sudo certbot certificates

# 5. Test HTTP redirect
curl -L -I http://kievonline.net

# 6. Test HTTPS
curl -I https://kievonline.net

# 7. Check Nginx logs
tail -20 /var/www/kievonline.net/logs/nginx-access.log

# 8. Check PM2 logs
pm2 logs kievonline-next --lines 10
```

---

## What Each Component Does

| Component | Port | Purpose |
|-----------|------|---------|
| **PM2/Next.js** | 3001 | Application server (internal only) |
| **Nginx** | 80/443 | Public reverse proxy, SSL termination |
| **Certbot** | - | Manages SSL certificate lifecycle |

---

## Troubleshooting

### Certbot fails with "Connection refused"

**Problem**: Nginx is already running on port 80/443

**Solution**:
```bash
sudo systemctl stop nginx
sudo certbot certonly --standalone -d kievonline.net -d www.kievonline.net
sudo systemctl start nginx
```

### "Port 80 already in use"

**Check what's using it**:
```bash
sudo lsof -i :80
sudo lsof -i :443
```

**Kill the process** (if it's old Nginx):
```bash
sudo systemctl stop nginx
sudo systemctl disable nginx
```

### Certificate file not found

**Check certificate location**:
```bash
ls -la /etc/letsencrypt/live/kievonline.net/
```

**Verify paths in Nginx config**:
```bash
sudo cat /etc/nginx/sites-available/kievonline.net | grep ssl_certificate
```

### Nginx test fails: "Address already in use"

This is normal if you haven't stopped the old Nginx. Reload instead:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### Browser shows security warning

**If certificate is self-signed or expired**:
```bash
sudo certbot renew --dry-run
sudo certbot renew
```

**Then reload Nginx**:
```bash
sudo systemctl reload nginx
```

---

## Performance Verification

Once deployed, test performance:

```bash
# Single request time
time curl -s https://kievonline.net > /dev/null

# Multiple requests to check caching
for i in {1..5}; do
  echo "Request $i:"
  curl -I https://kievonline.net 2>/dev/null | grep -E "HTTP|Cache"
done
```

---

## Success Indicators ✅

When everything is working:

1. ✅ `pm2 status` shows `kievonline-next` as **online**
2. ✅ `sudo systemctl status nginx` shows **active (running)**
3. ✅ `curl https://kievonline.net` returns **HTML homepage** (no errors)
4. ✅ `https://kievonline.net` loads in **browser without warnings**
5. ✅ Certificate shows **valid** when inspected in browser
6. ✅ All requests in **nginx-access.log** show status **200**
7. ✅ Static files show **Cache-Control: public, immutable** header

---

## Next Steps After Deployment

1. **Monitor logs** for 24 hours
   ```bash
   tail -f /var/www/kievonline.net/logs/nginx-access.log
   pm2 logs kievonline-next
   ```

2. **Check certificate expiration**
   ```bash
   sudo certbot certificates
   ```

3. **Test SSL rating** on [SSL Labs](https://www.ssllabs.com/ssltest/analyze.html?d=kievonline.net)

4. **Set up monitoring** for uptime and performance

---

## Emergency Procedures

### If Nginx won't start

```bash
# Check syntax
sudo nginx -t

# Check what's listening on ports
sudo lsof -i :80
sudo lsof -i :443

# Restart from scratch
sudo systemctl stop nginx
sudo systemctl start nginx
sudo systemctl status nginx
```

### If PM2 crashes

```bash
# Check logs
pm2 logs kievonline-next --lines 50

# Restart
pm2 restart kievonline-next

# Or restart everything
pm2 restart all
```

### If certificate expires

```bash
# Renew manually
sudo certbot renew

# Check status
sudo certbot certificates

# Reload Nginx
sudo systemctl reload nginx
```

---

## Support Commands

```bash
# View all Nginx sites
ls -la /etc/nginx/sites-enabled/

# View active configuration
sudo cat /etc/nginx/sites-available/kievonline.net

# View certificate details
sudo openssl x509 -in /etc/letsencrypt/live/kievonline.net/fullchain.pem -text -noout

# Check certificate expiration
sudo certbot certificates

# View renewal history
sudo cat /var/log/letsencrypt/letsencrypt.log | tail -20

# Monitor real-time traffic
sudo tail -f /var/www/kievonline.net/logs/nginx-access.log

# Monitor PM2 application
pm2 monit
```

---

**Your domain will be live at https://kievonline.net after completing Step 5!**

---

**Build Date**: November 30, 2025
**Status**: Ready for HTTPS Deployment ✅
