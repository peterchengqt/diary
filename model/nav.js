/**
 * Created by Perter on 2016/11/7.
 */
/**
 * this is the model of nav
 * in the module contain an object named nav_object
 * it provide some function to deal with problems like add a nav、delete a nav,add the second level nav and so on
 * the identity must be verified legal before use them
 **/
var dao_access=require("../dao/mongodb");

function GeneratorAnNav() {

}
var Nav={
    cache:null,//cache of nav data
    generator:function () {
        
    },//generator an nav model
    initCache:function () {
        
    },//initial the nav data
    addNav:function (request,callback) {
        //console.log(request);
        let navName=request.query.navName;
        let navMark=request.query.navMark;
        let navUrl=request.query.navUrl;
        dao_access.process(function (db) {
            //navMark can not repeat
            let collection=db.collection("nav");
            collection.findOne({"navName":navName},function (error,doc) {
                if(error) console.log(error);
                if(doc){
                    db.close();
                    callback("repeat data!");
                }
                else {
                    collection.insertOne({"navName":navName,"navMark":navMark,"navUrl":navUrl,"navTime":new Date()},function () {
                        db.close();
                        callback("insert finished!");
                    })
                }
            })
        })
    },//add an nav
    selectNav:function (request,callback) {
        var options={
            page:request.param("page")||1,//current page,default value is 1
            size:request.param("size")||3,//page size,default value is 20
            total:0,//total record
            totalPage:0//total page count
        };
        dao_access.process(function (db) {
            db.collection("nav").find({}).sort({"navTime":-1}).limit(options.size).toArray(function (error,doc) {
                if(error) console.log(error);
                let nav=[];
                doc.forEach(function (item) {
                    nav.push(item);
                })
                db.close();
                callback(nav);
            })
        })
    }

}


module.exports=Nav;

