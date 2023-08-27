const http=require('http')
const fs=require("fs")
const server=http.createServer((req,res)=>{
    const url=req.url
    const method=req.method
    if(url==='/'){
        fs.readFile("name.txt",{encoding:"utf-8"},(err,data)=>{

        
       
        res.write("<html>")
        res.write("<head><title>my</title></head>")
       
        res.write("<body><form action='/message' method='POST'><input type='text'name='message'><button type='submit'>send</button></form> </body>")
        res.write("</html>")
       return res.end()
        })

    }
    if(url==="/message" && method ==='POST'){
        const body=[]
        req.on("data",(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on("end",()=>{
            const parsedBody=Buffer.concat(body).toString()
            console.log(parsedBody)
            const message=parsedBody.split("=")[1]
            fs.writeFileSync("name.txt",message,(err)=>{
                
                console.log(`indise fs.writefile`)
                res.statusCode=302
                res.setHeader("Location","/")
                return res.end()
            })
            
        })
       
    }

    res.setHeader('Content-Type','text/html')
    res.write("<html>")
    res.write("<head><title>my</title></head>")
    res.write("<body><h1>Hello from node js</h1></body>")
    res.write("</html>")
    res.end("hello")
})
server.listen(3310)
