const http = require("http");
const fs = require("fs")

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const server = http.createServer((req, res) => {
    console.log(req.url);
    const pathName = req.url;

    if (pathName === "/" || pathName === "/overview") {
        res.end("This is the OVERVIEW")
    } else if (pathName === '/product'){
        res.end("This is the PRODUCT")
    } else if (pathName === "/api") {
        res.writeHead(200, { "Content-Type": "application/json" }) // Put json file in our header, to specify the kind of file we are passing through
        res.end(data)
    }else{
        res.writeHead(404, { "Content-type": "text.html" })
        res.end("<h1>Page not found</h1>")
    }
})

const port = 3000
server.listen(port, "127.0.0.1", () => {
    console.log(`Listening on port ${port}`);
})