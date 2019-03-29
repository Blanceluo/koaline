const Koa = require('koa')
const route = require('koa-route')
const cors = require('koa2-cors')
const app = new Koa()

app.use(cors({
    origin: ctx => {
        const ReqOrigin = ctx.req.headers.origin
        const allowOrigin = 'http://www.skywheel.xyz'
        if (ReqOrigin === allowOrigin) {
            return allowOrigin
        } else {
            return false
        }
    }
}))

app.use(cors())

app.use(route.get('/', async ctx => {
    ctx.body = {
        name: `${ctx.path}`,
        mark: {
            title: '莫使金樽空对月',
            title2: '唯有饮者留其名'
        }
    }
    console.log(ctx.path)
}))

app.use(route.get('/index', async ctx => {
    ctx.body = `
                <p>回忆是一种很奇妙的东西</p>
                <p>它生活在过去</p>
                <p>存在于现在</p>
                <p>却能影响未来</p>
                <p>--20181229</p>
            `
    console.log(ctx.path)
}))

app.listen({
    port: 3000,
    hots: '0.0.0.0'
}, () => {
    console.log('application run at port 3000')
})
