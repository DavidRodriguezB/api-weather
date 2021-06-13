var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/token-device" , function(req, res){
  var token = req.body.token;

  var db = firebase.database();
  var citiesDB = db.ref('cities')

  citiesDB.set(
    { "Dublin":
      {"name":"Dublin","latitude":"53.350140","longitude":"-6.266155"}
    }
  );

  res.send(token);

});

module.exports = router;
