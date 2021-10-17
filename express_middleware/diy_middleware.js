
/***
 * 自定义中间件
 */
const express = require('express')
const querystring = require('querystring')
const app = express()
const port = 8181

//中间件
app.use(require('./middleware/cs-body-parse'))
app.post('/post', (req,res)=>{
	console.log('req.body=>', req.body)
})

//路由
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))

