let http = require('http');
let { spawn } = require('child_process');

let sever = http.createServer(function (req, res) {
  console.log(req.method, req.url);
  if (req.method == 'POST' && req.url == '/hook') {
    let event = req.headers['x-github-event'];
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: true }));
    if (event == 'push') {
      spawn('sh', ['front.sh']);
    }
  } else {
    res.end();
  }
})

sever.listen(4000, () => {
  console.log('front CICD start')
})