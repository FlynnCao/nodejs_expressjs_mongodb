const express = require('express')
const app = express()
//导入路由
const backend = require('./router/backend')
const frontend = require('./router/frontend')

app.use('/backend',backend)
app.use('/frontend',frontend)
//app.use(express.urlencoded({extended:false}))
app.listen(8181, ()=>{
	console.log('server is listening at 8181');
})