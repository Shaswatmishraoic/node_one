const http = require("http");
const port = 3000;
const jsonobject = [
    {
        "What is node?": "Node.js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. It is synchronous and non-blocking  I/O operations"
    },
    // {
    //     "name":"Shaswat",
    //     "batch":"EA23",
    //     "Year":"2023"
    // },
    // {
    //     "name":"Shaswat",
    //     "batch":"EA23",
    //     "Year":"2023"
    // },
    // {
    //     "name":"Shaswat",
    //     "batch":"EA23",
    //     "Year":"2023"
    // },
]
// const cors = require("cors")

const app = http.createServer((req,res)=>{
    if(req.url == "/AboutUs"){
        res.write("<html>")
        res.write("<body>")
        res.write("<h2>What is node?</h2>")
        res.write("<p>Node.js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. It is synchronous and non-blocking  I/O operations  </p>")
        res.write("</body>")
        res.write("</html>")
        res.end()
    }
    else if(req.url =="/Post" && req.method==="POST"){
        res.write('Fine')
        res.end()
    }
    else if(req.url ==="/fetchAPI"){
        const data =JSON.stringify(jsonobject)
        res.write(data)
        res.end()
    }
    else{
        res.write('ok')
        res.end()
    }
})

// app.use(cors(
//     {
//         // origin:"http://localhost:3000" //domain here
//         origin:"*" 
//     }
// ))
//api from here

app.listen(port,()=>{
  console.log(`Fine ${port}`)
})
