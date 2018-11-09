const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World<br>我是一个koa小demo';
});

app.listen(4100,()=>{
  console.log('start nodejs server port in'+4100)
});