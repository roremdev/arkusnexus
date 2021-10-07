"use strict";

module.exports = {
  apps: [{
    name: 'blogue',
    script: './dist/index.js',
    env: {
      NODE_ENV: 'prod',
      PORT: '8080'
    }
  }]
};