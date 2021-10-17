const express = require('express')
const router = express.Router()
//前台 新闻列表 
router.get('/news', (req,res)=>{
	res.end('前台 新闻列表')
})
//前台 新闻详情
router.get('/news/:id', (req,res)=>{
	res.end('前台 新闻详情 ')
})
//前台 新闻分享
router.get('/news/share', (req,res)=>{
	res.end('前台 新闻分享 ')
})
//前台 新闻点赞操作
router.get('/news/like/:id',(req,res)=>{
	res.end('前台 新闻点赞操作')
})
module.exports = router;