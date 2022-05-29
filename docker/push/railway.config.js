module.exports = {
  apps: [
    {
      name: 'redis',
      script: '/usr/bin/redis-server'
    },
    {
      name: 'ios-push-notifications',
      script: './gorush',
      args: '-c ios.yml',
    },
    {
      name: 'clip-push-notifications',
      script: './gorush',
      args: '-c clip.yml',
    },
  ],
};
