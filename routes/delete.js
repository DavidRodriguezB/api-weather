var express = require("express");
var router = express.Router();
var firebase = require('firebase');

const errorsCheck = [
    'name'
]

router.get("/city/all", function(req,res,next){
    var db = firebase.database();
    db.ref('cities').set(null);
    res.status(200).json({ 'code' :200, 'message': 'All cities deleted'})
});

router.get("/city/byname", function(req,res,next){
    var check = checkData(req.query);
    if(check === true){
        var parameters = req.query
        var db = firebase.database();
        db.ref('cities/'+parameters.name).set(null);
        res.status(200).json({ 'code' :200, 'message': 'City deleted', 'params':parameters})
    }else{
        res.status(500).json({ 'code' :500, 'message': 'Missing city '+ check})
    }
    res.send(cities);
});

function checkData(parameters)
{
    for (let e in errorsCheck) {
        if(typeof parameters[errorsCheck[e]] === 'undefined'){
            return errorsCheck[e];
        }
    }
    return true;
}

module.exports=router;