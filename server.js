const express = require('express')
const app = express();
var path = require("path");
var http = require('http');
const fs = require("fs");// to read json file 
const port=process.env.PORT ||4000;


const url = "mongodb+srv://Marshood:raMHdQuDOBxwrcss@cluster0.ifcjp.mongodb.net/testReact";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
var bodyParser = require('body-parser');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(express.static('public'));


const User = mongoose.model('User', {
    Username: String,
    Password: String,
    Email: String
});

const BloodPressure = mongoose.model('BloodPressure', {

    systolic: String, diastolic: String, HeartRate: String, radio: String, Date: String, Time: String
});

 

app.post('/checkUserExist', function (req, res) {
    const { Username, Password } = req.body;
    let { success } = false;
    console.log("test")
    console.log("Check User Exist...", Username, Password);
    User.find({ Username: Username, Password: Password }, function (err, doc) {
        if (doc.length === 0 || doc.length === []) {
            console.log("not found...");
            res.send([{ success: false }])
        } else {
            // res.setHeader('Content-Type', 'application/json');
            // res.end(JSON.stringify({success1:true},{doc:doc}));
            // res.status(500).send({ error: 'Something failed!' })
            res.send([{ success: true }, { doc: doc }])
        }
    })
    //res.send({ success:success })

})
app.put('/AddUser', function (req, res) {
    console.log("Adding New User...");
    const { UserName, UserMail, Password } = req.body;
    let UserNew = new User({ Username: UserName, Email: UserMail, Password: Password });

    User.find({ Username: UserName }, function (err, doc) {
        if (doc.length === 0 || doc.length === []) {
            UserNew.save().then(docs => { console.log('save to DB') });

            res.send([{ success: true }])
        } else {
            res.send([{ success: false }]);

        }
    })
    UserNew.save().then(docs => { console.log('save to DB') });

})
app.post('/addBloodPressure', function (req, res) {
    console.log("SaveToDB...");
    const { systolic, diastolic, HeartRate, radio } = req.body;
    let newBloodPressureData = new BloodPressure({ radio: radio, systolic: systolic, diastolic: diastolic, HeartRate: HeartRate, Date: new Date().toLocaleDateString(), Time: new Date().toLocaleTimeString() });

    newBloodPressureData.save().then(docs => { console.log('save to DB....') });

    res.send([{ success: true }])

})
app.get('/getAllData', function (req, res) {
    console.log("getData...");
    BloodPressure.find({}, function (err, doc) {

        res.send([doc])

    })
})
app.post('/getNewDataWithFillters', function (req, res) {
    console.log("getNewDataWithFillters...");
    const { value } = req.body;
    if (value != "All") {
        BloodPressure.find({ radio: value }, function (err, doc) {

            res.send([doc])
        })
    }
    else {
        BloodPressure.find({}, function (err, doc) {

            res.send([doc])
        })
    }


})




app.listen(port, () => { console.log("App is Listening port : ",port) })
