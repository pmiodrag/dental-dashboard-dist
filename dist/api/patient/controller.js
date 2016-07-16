"use strict";
var mysql = require('mysql'); // node-mysql module
var path = require('path');
var db = require("../connection/db");
var bodyParser = require('body-parser');
var multer = require("multer");
exports.imageDir = 'uploads';
function index(req, res) {
    console.log("getPatients");
    db.db_connection.ready(function () {
        var patientTable = db.db_connection.table("patient");
        patientTable.findAll().then(function (patients) {
            console.log("SELECT * FROM patient results: ");
            res.send(JSON.stringify(patients));
        });
    });
}
exports.index = index;
function show(req, res) {
    console.log("getPatient");
    var patientId = req.params.id;
    db.db_connection.ready(function () {
        var patientTable = db.db_connection.table("patient");
        patientTable.find(patientId).then(function (patients) {
            console.log("SELECT FROM patient results: " + patientId);
            res.send(JSON.stringify(patients));
        });
    });
}
exports.show = show;
function getPatientData(req, res) {
    console.log("getPatientData server side ", __dirname);
    res.sendFile(path.resolve(__dirname, 'patients.json'));
}
exports.getPatientData = getPatientData;
;
function create(req, res) {
    console.log("addPatient ", req.body);
    var newPatient = req.body;
    db.db_connection.ready(function () {
        var patientTable = db.db_connection.table("patient");
        patientTable.save(newPatient).then(function (result) {
            console.log("New patient added: " + result.id);
            res.send(JSON.stringify(result));
        });
    });
}
exports.create = create;
function update(req, res) {
    console.log("update Patient ", req.body);
    var newPatient = req.body;
    db.db_connection.ready(function () {
        var patientTable = db.db_connection.table("patient");
        patientTable.save(newPatient).then(function (result) {
            console.log("Patient updated: " + result.id);
            res.sendStatus(201);
        });
    });
}
exports.update = update;
function destroy(req, res) {
    console.log("deletePatientData server side ", req.params.id);
    var patientId = req.params.id;
    db.db_connection.ready(function () {
        var patientTable = db.db_connection.table("patient");
        patientTable.remove(patientId, function (result) {
            console.log("Patient deleted: " + patientId);
            res.sendStatus(204);
        });
    });
}
exports.destroy = destroy;
function uploadFile(req, res) {
    // We are able to access req.files.file thanks to
    // the multiparty middleware
    //upload.single(req.file);
    console.log("Patient param: " + req.param);
    res.status(204).end("Profile image uploaded");
}
exports.uploadFile = uploadFile;
function uploadGallery(req, res) {
    // We are able to access req.files.file thanks to
    // the multiparty middleware
    //upload.single(req.file);
    var patientId = req.params.id;
    console.log("patientId : " + patientId);
    var filename = exports.imageDir + '/' + req.file.filename;
    var newImage = { patientid: patientId, source: filename };
    db.db_connection.ready(function () {
        var galleryTable = db.db_connection.table("gallery");
        galleryTable.save(newImage).then(function (result) {
            console.log("New image added: " + result.id);
            res.send(JSON.stringify(result));
        });
    });
    //    res.status(204).end("Profile image uploaded");
}
exports.uploadGallery = uploadGallery;
