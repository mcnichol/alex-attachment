const http = require("node:http");
const fs = require("fs");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {

    let route = req.url.includes("?") ? req.url.split("?")[0] : req.url;

//    res.setHeader('Access-Control-Allow-Origin', '*');
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
//    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
//    res.setHeader('Access-Control-Allow-Credentials', true); // If needed


    switch(route){
        case "/redirect": 
            console.log("Serving Redirect");
            res.writeHead(200, {"Content-Type": "text/html"})
            fs.createReadStream("redirect.html").pipe(res)
            break;
        default:
            console.log("Serving Index");
            res.writeHead(200, {"Content-Type": "text/html"})
            fs.createReadStream("index.html").pipe(res)

    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
