var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

app.get('/demo', function(req, res) {
    res.sendFile(path.join('/home/haga/SRdemo/demo.html'));
});

// app.get('/', function(req, res) {
//     res.sendFile(path.join('/home/haga/SRdemo/SRIndex.html'));
// });

app.get('/demol3', function(req, res) {
    res.sendFile(path.join('/home/haga/SRdemo/demoL3.html'));
});

app.get('/demoCF', function(req, res) {
    res.sendFile(path.join('/home/haga/SRdemo/demoCloudFront.html'));
});

// app.get('/videovacances', function(req, res) {
//     const path = '/home/haga/SRdemo/MVI_7643.MP4'
//     const stat = fs.statSync(path)
//     const fileSize = stat.size
//     const range = req.headers.range
//     if (range) {
//       const parts = range.replace(/bytes=/, "").split("-")
//       const start = parseInt(parts[0], 10)
//       const end = parts[1] 
//         ? parseInt(parts[1], 10)
//         : fileSize-1
//       const chunksize = (end-start)+1
//       const file = fs.createReadStream(path, {start, end})
//       const head = {
//         'Content-Range': `bytes ${start}-${end}/${fileSize}`,
//         'Accept-Ranges': 'bytes',
//         'Content-Length': chunksize,
//         'Content-Type': 'video/mp4',
//       }
//       res.writeHead(206, head);
//       file.pipe(res);
//     } else {
//       const head = {
//         'Content-Length': fileSize,
//         'Content-Type': 'video/mp4',
//       }
//       res.writeHead(200, head)
//       fs.createReadStream(path).pipe(res)
//     }
//   });

app.listen(8080);