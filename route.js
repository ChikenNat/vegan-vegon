const express = require('express');
const app = express();
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const mongourl = "mongodb://localhost:27017/vegan";
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.route('/').get(function(req, res) {
    res.redirect("/VEGAN1.html")
});

router.route('/add-cust').post(function(req, res) {
    var query = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        msg: req.body.msg
    }

    MongoClient.connect(mongourl, function(err, db) {
        if(err) {
            console.log("Error: ", err);
        }
        else {
            var dbo = db.db("vegan");
            dbo.collection("cust").insertOne(query, function(err, result) {
                console.log(result)
                db.close();
            });
        }
    });
});

module.exports = router;