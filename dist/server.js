"use strict";
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var patients = require("./api/patient/controller");
var doctors = require("./api/doctor/controller");
var treatments = require("./api/treatment/controller");
var diagnoses = require("./api/diagnose/controller");
var gallery = require("./api/gallery/controller");
var agenda = require("./api/agenda/controller");
var port = process.env.PORT || 3000;
var app = express();
//var router = express.Router();
var multer = require("multer");
var mkdirp = require('mkdirp');
// upload destination directory
var DIR = __dirname + '/' + patients.imageDir;
/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});
app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));
app.use('/styles', express.static(path.resolve(__dirname, 'styles')));
app.use('/fonts', express.static(path.resolve(__dirname, 'assets/fonts')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(require('connect-livereload')({
//    port: 35729
//  }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});
//**** REST ****//
// Patient
app.get('/patient', patients.index);
app.post('/patient', patients.create);
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        mkdirp.sync(DIR);
        cb(null, DIR);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage }).single('file');
app.post('/patient/upload', upload, patients.uploadFile);
app.post('/patient/:id/upload/gallery', upload, patients.uploadGallery);
app.put('/patient/:id', patients.update);
app.get('/patient/:id', patients.show);
app.delete('/patient/:id', patients.destroy);
app.get('/patient/:id/:firstname/:lastname/treatments', treatments.index);
// Doctor
app.get('/doctor', doctors.index);
app.post('/doctor', doctors.create);
//var storage = multer.diskStorage({
//  destination: function (req, file, cb) {
//    cb(null, DIR)
//  },
//  filename: function (req, file, cb) {
//    cb(null, file.originalname)
//  }
//})
// Gallery
app.get('/gallery', gallery.index);
var upload = multer({ storage: storage }).single('file');
app.post('/doctor/upload', upload, doctors.uploadFile);
app.put('/doctor/:id', doctors.update);
app.get('/doctor/:id', doctors.show);
app.delete('/doctor/:id', doctors.destroy);
app.get('/doctor/:id/:firstname/:lastname/treatments', treatments.index);
// Treatment
//app.get('/patient/:id/treatments', treatments.index);
app.get('/treatments', treatments.index);
app.post('/treatment', treatments.create);
app.put('/treatment/:id', treatments.update);
app.get('/treatment/:id', treatments.show);
app.delete('/treatment/:id', treatments.destroy);
//Diagnose
app.get('/diagnose', diagnoses.index);
app.post('/diagnose', diagnoses.create);
app.put('/diagnose/:id', diagnoses.update);
app.delete('/diagnose/:id', diagnoses.destroy);
// Agenda
app.get('/events', agenda.index);
app.post('/events', agenda.create);
app.put('/events/:id', agenda.update);
//app.get('/events/:id', agenda.show);
app.delete('/events/:id', agenda.destroy);
var renderIndex = function (req, res) {
    console.log("renderIndex __dirname", __dirname);
    res.sendFile(path.resolve(__dirname, 'index.html'));
};
app.get('/*', renderIndex);
//connection.end();
