const Koa = require('koa')
const route = require('koa-route')
const cors = require('koa2-cors')
const app = new Koa()

app.use(cors({
    origin: ctx => {
        return 'http://www.skywheel.xyz'
    }
}))

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
    ctx.body = '<h2>大家好</h2>'
    console.log(ctx.path)
}))

app.listen({
    port: 3000,
    hots: '0.0.0.0'
}, () => {
    console.log('application run at port 3000')
})
