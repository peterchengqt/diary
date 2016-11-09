/**
 * Created by Perter on 2016/11/8.
 */
var mongodb=require("mongodb");
function process_mongodb() {
    var client=mongodb.MongoClient;
    client.connect("mongodb://localhost:27017/diary",function (error,db) {
        if(error) console.log(error);
    })
}
process_mongodb();