'use strict';

require('./index')('.env.json');
require('./index')('.env.dev.json');

console.log(process.env);
