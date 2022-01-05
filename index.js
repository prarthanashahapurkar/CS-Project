const express= require("express");
const RequestIp = require('@supercharge/request-ip');
const app= express()
const ipfetch = require('ip-fetch');
let info;
let geoarr=[]


let larr = []
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use( express.static( "./views" ) );

app.get("/",function(req,res){
    
    var geoip = require('geoip-lite');
    console.log("double working");
    var ip = RequestIp.getClientIp(req);
    
    let fun = async () =>{
        info = await ipfetch.getLocationNpm(ip); 
        console.log(info);
        geoarr.push(info);
    }
    fun();
    larr.push(ip);
    
    
    console.log("YOur IP: ",larr);
    // console.log(geo);
    console.log("geo array:",geoarr);
    res.render("index");
});

app.get("/map",function(req,res){
    
    var c={lat:38.913188059745586,lon:-77.03238901390978};

    if(geoarr.length>0)
    {
        c={lat:geoarr[geoarr.length-1].lat,lon:geoarr[geoarr.length-1].lon}
    }

    console.log("Distance: ",distance(19.46,72.8097, geoarr[geoarr.length-1].lat, geoarr[geoarr.length-1].lon, "K"));

    res.render("map",{cdata:c});
});

app.get("/new_map",function(req,res){
    
    // var c={lat:38.913188059745586,lon:-77.03238901390978};

    // if(geoarr.length>0)
    // {
    //     c={lat:geoarr[geoarr.length-1].lat,lon:geoarr[geoarr.length-1].lon}
    // }
    res.render("new_map");
});

function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}

// console.log("Distance: ",(distance(19.270941,72.968102,19.46,72.8097,"K")))

app.listen(process.env.PORT || 5000);

//###########################

/* git add .
git commit -am "add start"
git push -u origin master */

//###########################

//heroku logs -t --app cs-project-ps