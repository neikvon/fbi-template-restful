'use strict';

require('babel-register')({
  presets: ['es2015'],
  plugins: ['async-to-promises']
});

require('./src/app.js');