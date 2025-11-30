module.exports = {
  apps: [
    {
      name: 'kievonline-next',
      script: './node_modules/.bin/next',
      args: 'start -p 3001',
      cwd: '/var/www/kievonline.net/kievonline.net',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
      instances: 1,
      exec_mode: 'cluster',
      max_memory_restart: '1G',
      error_file: '/var/www/kievonline.net/logs/error.log',
      out_file: '/var/www/kievonline.net/logs/out.log',
      log_file: '/var/www/kievonline.net/logs/combined.log',
      time: true,
      merge_logs: true,
      autorestart: true,
      watch: false,
      ignore_watch: [
        'node_modules',
        '.next',
        '.turbo',
        'public',
      ],
      max_restarts: 10,
      min_uptime: '10s',
      listen_timeout: 10000,
      kill_timeout: 5000,
    },
  ],
  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'git@github.com:repo.git',
      path: '/var/www/kievonline.net',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
    },
  },
};
