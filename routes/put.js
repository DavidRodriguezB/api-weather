var express = require("express");
var router = express.Router();

var firebase = require('firebase');

var firebaseConfig = {
  apiKey: "AIzaSyB5Mv1DBiwg96Kp4Ziqa_NlYDwkseO7ijY",
  authDomain: "apiweather-33019.firebaseapp.com",
  databaseURL: "https://apiweather-33019-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "apiweather-33019",
  storageBucket: "apiweather-33019.appspot.com",
  messagingSenderId: "588170631575",
  appId: "1:588170631575:web:c6c9b666e66ac4938a0cd2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const errorsCheck = [
    'name',
    'longitude',
    'latitude'
]

router.get("/city/new", function(req,res,next){
    var check = checkData(req.query);
    if(check === true){
        var db = firebase.database();
        var parameters = req.query
        db.ref('cities/' + parameters.name).set({
            'name': parameters.name,
            'longitude': parameters.longitude,
            'latitude' : parameters.latitude
          });       
        res.status(200).json({ 'code' :200, 'message': 'OK ', 'params':parameters})
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