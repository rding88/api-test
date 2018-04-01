var koa = require('koa');
var app = new koa();

app.use(function* () {
    this.body = 'Hello from Koajs';
});

app.listen(3001);
//# sourceMappingURL=server.js.map