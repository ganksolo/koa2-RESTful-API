module.exports = {
  apps : [{
    name: "restful-api",
    script: "index.js",
    instances: 4,
    watch: true,
    ignore_watch: [
      "node_modules",
      "logs"
    ],
    error_file: "./logs/stderr.log",
    out_file: "./logs/stdout.log",
    log_date_format: "YYYY-MM-DD HH:mm:ss",
    env: {
      "NODE_ENV": "development",
      "PORT": "3000"
    },
    env_production: {
      "NODE_ENV": "production"
    }
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
