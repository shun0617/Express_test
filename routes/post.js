var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";

router.post('/', function(req, res) {
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function(err, client) {
        let obj = req.body;
        client.db('post').collection("post").insertOne(obj, function(err, r) {
            client.close();
            res.send(r);
        });
    });
});
module.exports = router;