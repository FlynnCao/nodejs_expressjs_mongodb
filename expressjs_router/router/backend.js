const express = require('express')
const router = express.Router()
//后台 用户添加
router.post('/user/add', (req,res)=>{
	res.end('后台 用户添加 ')
})
//后台 用户修改
router.put('/user/:id', (req,res)=>{
	res.end('后台 用户修改')
})
//后台 用户删除
router.delete('/user/:id', (req,res)=>{
	res.end('后台 用户删除 ')
})


module.exports = router;