const http = require('http')
const fs = require('fs')
const port = 7520

const server = http.createServer((req, res)=>{
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
    res.end(contents)
  }
)


})

server.listen(port, () => {
  console.log('Listening and handling all your http requests on port', port);
})
