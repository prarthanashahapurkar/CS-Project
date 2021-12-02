const express = require("express");
const app = express();
const requestIp = require('request-ip');
var geoip = require('geoip-lite');
var ipLocation = require('ip-location')
const ipfetch = require('ip-fetch');

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static("./views"));

console.log("hellooo");

let arr = [];

app.get("/", function (req, res) {
    console.log("WORKING")
    //res.send("Great Success!!");
    const ip = requestIp.getClientIp(req);
    arr.push(ip);
    var geo = geoip.lookup(ip);
    console.log("ip: ", ip);
    res.render("index");
    console.log(arr);
    console.log("location", geo);
    //console.log("hihaaa: ", geoip.pretty(geo));

    let info = ipfetch.getLocationNpm(ip); // example => info = await ipfetch.getLocationNpm('1.1.1.1');
    console.log("info: ",info);
    // ipLocation(ip, function (err, data) {
    //     console.log("data: ",data);
    // });
});

app.listen(process.env.PORT || 5000);


//###########################

//git add .
//git commit -am "add start"
//git push -u origin master

//###########################
