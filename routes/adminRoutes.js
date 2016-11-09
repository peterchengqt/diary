/**
 * Created by Perter on 2016/11/7.
 */
var nav=require("../model/nav");
var bodyParser=require("body-parser");

function  AdminGeneratorRoute(express) {
    var router=express.Router();
    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({extended:true}));
    router.get("/nav",function (requset,response,next) {
        console.log(requset.param);
        nav.selectNav(requset,function (doc) {
            response.render("nav",{nav:doc});
        })
    });
    router.get("/nav/add.shtml",function (request,response) {
        response.render("nav-add")
    });
    router.post("/nav/add",function (request,response) {
        nav.addNav(request,function (value) {
            response.render("nav-result",{result:value,redirect:"/admin/nav"});
        })
        /*new Promise(function (resolve,reject) {
            let result;
            if(!(result=nav.addNav(request))) {
                console.log(2);
                resolve(result);
            }
        }).then((value)=>{
            response.render("nav-result",{result:value,redirect:"/admin/nav"});
        })*/
    })
    return router;
}
module.exports=function (express) {
    return AdminGeneratorRoute(express);
}