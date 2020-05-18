const session = require('koa-generic-session');
const convert = require('koa-convert');
const CSRF = require('koa-csrf');
const Koa = require('koa');

const app = new Koa();

// set the session keys
app.keys = [process.env.SECRET_KEY];

// add session support
app.use(convert(session()));

module.exports = new CSRF({
    invalidTokenMessage: 'Invalid CSRF token',
    invalidTokenStatusCode: 403,
    excludedMethods: ['GET', 'HEAD', 'OPTIONS'],
    disableQuery: false
});