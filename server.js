const http = require('http')
const fs = require('fs')
const url = require('url')
const port = 7520

const server = http.createServer((req, res)=>{
  //parse url
  let { query } = url.parse(req.url, true)
  //read the file, write it out
  fs.readFile('index.html', (err, contents)=> {
    if (err) {
      console.log(err)
      res.statusCode = 404
      res.end
    }
    //console.log(req)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/HTML')
    res.end(contents.toString().replace(query.from, query.to))
  }
)


})

server.listen(port, () => {
  console.log('Listening and handling all your http requests on port', port);
})
