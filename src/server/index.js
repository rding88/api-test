const _ = require('koa-route');
const Koa = require('koa');
const app = new Koa();

const db = {
  tobi: { name: 'tobi', species: 'ferret' },
  loki: { name: 'loki', species: 'ferret' },
  jane: { name: 'jane', species: 'ferret' }
};

const pets = {
  list: (ctx) => {
    const names = Object.keys(db);
    ctx.body = 'pets: ' + names.join(', ');
  },

  show: (ctx, name) => {
    const pet = db[name];
    if (!pet) return ctx.throw('cannot find that pet', 404);
    ctx.body = pet.name + ' is a ' + pet.species;
  }
};

app.use(_.get('/pets', pets.list));
app.use(_.get('/pets/:name', pets.show));

app.listen(3000);
console.log('listening on port 3000');


//var koa = require('koa');
//var app = module.exports = koa();
//var routes = require('koa-route');

//const greetings = async (ctx, next) => {
//    ctx.body = 'self';
//    await next();
//    ctx.body += ' Remember to subscribe';
//}
//const app = new koa();
//app.use(routes.get("/user/:id", getinfo));
//function* getinfo(id) {
//  this.body = "you passsed me :" + id;
//};
//const app = new koa();
//app.use(greetings);
//app.listen(3000);
//console.log("The app is listening on port 3000");


//mport config from 'config';

//import * as steem from '@steemit/steem-js';

//const path = require('path');
//const ROOT = path.join(__dirname, '../..');

// Tell `require` calls to look into `/app` also
// it will avoid `../../../../../` require strings

// use Object.assign to bypass transform-inline-environment-variables-babel-plugin (process.env.NODE_PATH= will not work)
//Object.assign(process.env, { NODE_PATH: path.resolve(__dirname, '..') });

//require('module').Module._initPaths();

// Load Intl polyfill
// require('utils/intl-polyfill')(require('./config/init').locales);

/*
global.$STM_Config = {
    fb_app: config.get('facebook_app_id'),
    steemd_connection_client: config.get('steemd_connection_client'),
    steemd_connection_server: config.get('steemd_connection_server'),
    steemd_use_appbase: config.get('steemd_use_appbase'),
    chain_id: config.get('chain_id'),
    address_prefix: config.get('address_prefix'),
    img_proxy_prefix: config.get('img_proxy_prefix'),
    ipfs_prefix: config.get('ipfs_prefix'),
    disable_signups: config.get('disable_signups'),
    read_only_mode: config.get('read_only_mode'),
    registrar_fee: config.get('registrar.fee'),
    upload_image: config.get('upload_image'),
    site_domain: config.get('site_domain'),
    facebook_app_id: config.get('facebook_app_id'),
    google_analytics_id: config.get('google_analytics_id'),
};

const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
const WebpackIsomorphicToolsConfig = require('../../webpack/webpack-isotools-config');

global.webpackIsomorphicTools = new WebpackIsomorphicTools(
    WebpackIsomorphicToolsConfig
);

global.webpackIsomorphicTools.server(ROOT, () => {
    steem.api.setOptions({
        url: config.steemd_connection_client,
        useAppbaseApi: !!config.steemd_use_appbase,
    });
    steem.config.set('address_prefix', config.get('address_prefix'));
    steem.config.set('chain_id', config.get('chain_id'));

    // const CliWalletClient = require('shared/api_client/CliWalletClient').default;
    // if (process.env.NODE_ENV === 'production') connect_promises.push(CliWalletClient.instance().connect_promise());
    try {
        require('./server');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
});
*/
