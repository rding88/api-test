var koa = require('koa');
var app = module.exports = new koa();
var routes = require('koa-route');

//const greetings = async (ctx, next) => {
//    ctx.body = 'self';
//    await next();
//    ctx.body += ' Remember to subscribe';
//}
//const app = new koa();
app.use(routes.get("/user/:id",get));
function *get(id) {
  this.body = "you passsed me :" + id;
};
//const app = new koa();
//app.use(greetings);
app.listen(3000);
console.log("The app is listening on port 3000");
