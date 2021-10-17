/**
 * 内置中间件
 */
const express = require('express')
const app = express()
//使用中间件 需要放在具体的路由之前
app.use(express.urlencoded(({extended:false})))
app.use(express.json())
//接受普通urlencoded数据
app.post('/post',((req, res) => {
    console.log(req.body)
}))
app.listen(8181, ()=>{
    console.log('server is running at 8181')
})

