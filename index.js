const express = require("express");
const app = express();
const requestIp = require('request-ip');
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use( express.static( "./views" ) );

app.get("/", function(req,res) {
    console.log("WORKING")
    res.send("Great Success!!");
    const ip = requestIp.getClientIp(req); 
    console.log("ip: ",ip);
    res.render("index");
});


// const RequestIp = require('@supercharge/request-ip');
// const app= express()
// app.use(express.urlencoded({ extended: false }));
// app.set("view engine", "ejs");
// app.use( express.static( "./views" ) );
// app.get("/",function(req,res){
//     console.log("double working");
//     const ip = RequestIp.getClientIp(req);
//     console.log("YOur IP: ",ip);
//     res.render("index");
// });

app.listen(process.env.PORT || 5000);

//###########################

//git add .
//git commit -am "add start"
//git push -u origin master

//###########################
