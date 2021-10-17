//导入express
const express = require('express');
//创建web服务
const app = express();
const port = 8181;
//定义路由
app.listen(port, ()=>{
    console.log('listing port on port 8181');

})
