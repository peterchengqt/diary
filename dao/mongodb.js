/**
 * Created by Perter on 2016/11/7.
 */

/**
 * mongodb base class
 */
var mongodb=require("mongodb");
function process_mongodb(callback) {
    var client=mongodb.MongoClient;
    client.connect("mongodb://localhost:27017/diary",function (error,db) {
        if(error) console.log(error);
        callback(db);
    })
}
//test
/*new Promise(function(resolve,reject){process_mongodb(function (db) {
    let collection=db.collection("nav");
    collection.insertOne({"navName":"首页","navMark":"index","navUrl":"/","navTime":new Date()});
    resolve("insert finished!")
})}).then((value)=>{
    console.log(value);
})*/
module.exports.process=function (callback) {
    return process_mongodb(callback)
}
