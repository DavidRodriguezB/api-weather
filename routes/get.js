var express = require("express");
var router = express.Router();
var firebase = require('firebase');

router.get("/city/all", function(req,res,next){
    var db = firebase.database();
    var cities = db.ref('cities');
    cities.on('value', (snapshot) => {
        res.status(200).json(snapshot.val())
      }, (errorObject) => {
        res.status(500).json({ 'code' :500, 'message':'The read failed: ' + errorObject.name})
      });
});

router.get("/city/byname", function(req,res,next){
    var db = firebase.database();
    var parameters = req.query;
    if(typeof parameters.name !== 'undefined'){
        var cities = db.ref('cities/'+parameters.name);
        cities.on('value', (snapshot) => {
            if(snapshot.val() !== 'undefined' && snapshot.val() != null){
                res.status(200).json(snapshot.val())
            }else{
                res.status(404).json({ 'code' :404, 'message':'Missing city '+parameters.name})
            }
          }, (errorObject) => {
            res.status(500).json({ 'code' :500, 'message':'Error'})
          });
    }else{
        res.status(500).json({ 'code' :500, 'message':'City name required'})
    }
});

module.exports=router;