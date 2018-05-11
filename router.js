const router = require('koa-router')()
const HomeController = require('./controller/home')
module.exports = (app) => {
    // 添加路由
    router.get('/',HomeController.index )

    router.get('/home', HomeController.home)

    router.get('/home/:id/:name', HomeController.homeParams)


    router.get('/user', HomeController.login)

    router.post('/user/register', HomeController.register)

    // 调用路由中间件
    app.use(router.routes()).use(router.allowedMethods());
}