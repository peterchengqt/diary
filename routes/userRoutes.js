/**
 * Created by Perter on 2016/11/7.
 */
//generator a route object
function  UserGeneratorRoute(express) {
    var router=express.Router();
    router.get("/",function (requset,response,next) {
        response.render("index");
    });
    router.get("/test",function (requset,response,next) {
        response.send("test");
    })

    return router;
}
module.exports=function (express) {
    return UserGeneratorRoute(express);
}
