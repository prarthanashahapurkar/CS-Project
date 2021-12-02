const express = require("express");
const app = express();
const requestIp = require('request-ip');
var geoip = require('geoip-lite');
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use( express.static( "./views" ) );

console.log("hellooo");

let arr=[];

app.get("/", function(req,res) {
    console.log("WORKING")
    //res.send("Great Success!!");
    const ip = requestIp.getClientIp(req); 
    arr.push(ip);
    var geo = geoip.lookup(ip);
    console.log("ip: ",ip);
    res.render("index");
    console.log(arr);
    console.log("location", geo);
    console.log("hihaaa: ", geoip.pretty(ip));
});

app.listen(process.env.PORT || 5000);


//###########################

//git add .
//git commit -am "add start"
//git push -u origin master

//###########################
