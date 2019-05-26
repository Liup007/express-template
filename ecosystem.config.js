module.exports = {
  apps: [
    {
      name: 'API',
      script: './bin/www',
      cwd: './',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      output: './logs/out.log',
      error: './logs/error.log',
      log: './logs/run.log',
      instances: 1,
      autorestart: true,
      watch: ['routes', 'config', 'lib', 'app.js'],
      ignore_watch: ['bin', 'logs', 'node_modules', 'public', 'temp'],
      watch_options: {
        followSymlinks: false
      },
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],
  deploy: {
    production: {
      user: 'root',
      host: '42.51.43.29',
      ref: 'origin/master',
      repo: 'git@gitee.com:liup007/gsshopnode.git',
      path: '/www/production',
      'post-deploy':
        'git pull origin master && npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
}
