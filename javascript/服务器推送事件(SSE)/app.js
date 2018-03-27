var fs = require('fs')
var path = require('path')
var PassThrough = require('stream').PassThrough
var Readable = require('stream').Readable
var koa = require('koa')
var Router = require('koa-router')
var app = new koa()
var router = new Router()
var { setInterval } = require('timers')
//
function RR(){
    Readable.call(this, arguments)
}
RR.prototype = new Readable()
RR.prototype._read = function(data){}

router.get('/',function(ctx,next){
    ctx.set('content-type','text/html');
    ctx.body = fs.readFileSync(path.join(process.cwd(),'index.html'))
});

const sse = (stream, event, data) => {
    return stream && stream.push(`event:${event}\ndata: ${ JSON.stringify(data) }\n\n`)
}
router.get('/es', function (ctx, next) {
    var stream = new RR() //PassThrough()
    ctx.set({
        'Content-Type':'text/event-stream',
        'Cache-Control':'no-cache',
        'Connection': 'keep-alive'
    });
    sse(stream,'test', {a: "yango", b: "tango"})
    ctx.body = stream
    setInterval(()=>{
        sse(stream,'test',{a: "yango",b: Date.now()})
    }, 3000)
});

app.use(router.routes())
app.listen(3000,function(){
    console.log('server is running at http://localhost:3000')
});
