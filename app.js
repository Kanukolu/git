const http=require('http')
const server=http.createServer((req,res)=>{
    console.log(req)
    console.log("hi")
})
server.listen(2000)
// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/plain');
  
//   if (req.url === '/') {
//     console.log("Your name");
//     res.end("Your name");
//   } else {
//     res.end("Not found");
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });