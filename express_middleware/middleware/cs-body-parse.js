
const querystring = require('querystring')
const csBodyParse = function (req,res,next){
	console.log('确认走了中间件')
	let arr = []
	req.on('data',(buffer)=>{
		arr.push(buffer) //将数据片增加到数组中
	})
	//请求完毕后将数据进行拼接
	req.on('end',()=>{
		let buffer = Buffer.concat(arr)
		let postData = querystring.parse(buffer.toString())
		console.log(postData);
		//将数据写入到req.body上
		req.body = postData
		//可能是异步代码 所以需要把next()放到req.on里
		next() 
	})
	//在最后加上继续往后执行的next方法
}

//导出
module.exports = csBodyParse