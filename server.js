/**
 * Created by Perter on 2016/11/7.
 */
var express=require("express");
var bodyParser=require("body-parser");
//create an application
var app=express();
var userRouter=require("./routes/userRoutes")(express);
var adminRouter=require("./routes/adminRoutes")(express);


var staticPath=__dirname+"/resource";
var viewPath=__dirname+"/view";
//use the router
app.use("/",userRouter);
app.use("/admin",adminRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//use the static resource
app.use(express.static("bower_components"));
//set the view engine,there use jade template
app.set("view engine","jade");
//set the view directory
app.set("views",[viewPath,viewPath+"/nav",viewPath+"/accessadmin"]);
app.get("/login",function (req,res) {
    res.render("login");
})
app.get("/main",function (req,res) {
    res.render("default");
})
app.listen(3000);
console.log("application named `web` start on port 3000");
