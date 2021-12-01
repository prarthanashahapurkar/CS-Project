const express = require("express");
const app = express();

app.get("/", function(res,req) {

    console.log("Hello World!")
    res.send("WORKING");
});

app.listen(process.env.PORT || 5000);


// app.get("/",function(req,res){
//     console.log("double working");
//     const ip = RequestIp.getClientIp(req);
//     console.log("YOur IP: ",ip);
//     res.render("index");
// });

// app.listen(process.env.PORT || 5000);