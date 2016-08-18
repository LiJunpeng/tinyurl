
// var express = require('express');
// var app = express();
// var restRouter = require('./routes/rest');
// var redirectRouter = require('./routes/redirect');

// app.use('/api/v1', restRouter);

// app.use('/:shortUrl', redirectRouter);

// app.listen(3000);





// ================= pure node.js 1 =====================
// var http = require('http');

// http.createServer(function (req, res){
//     res.writeHead(200, {"Content-Type": "text-plain"});
//     res.write("23333333");
//     res.end();
// }).listen(3000);


// ================= pure node.js 2 =====================
// var http = require('http');
// var fs = require("fs");

// http.createServer(function (req, res){
//     res.writeHead(200, {"Content-Type": "text-html"});
//     var html = fs.readFileSync(__dirname + '/index.html')   // 默认是异步读取，此处要手动同步
//     res.end(html);

// }).listen(3000);


// ================== express ===========================

var express = require('express');
var app = express();

app.get('/', function (req, res){
    res.send("express server!!!!");
});

app.listen(3000);

