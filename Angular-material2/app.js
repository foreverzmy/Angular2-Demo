const Koa = require('koa');
const static = require('koa-static');
const convert = require('koa-convert');
const path = require('path');
const fs = require('fs');

const app = new Koa();


app
  .use(convert(static(process.cwd() + '/dist')))

app.listen('9000', () => {
  console.log('Server running at post 9000.')
});