"use strict";
var mysql = require('mysql'); // node-mysql module
var path = require('path');
var db = require("../connection/db");
var bodyParser = require('body-parser');
var multer = require("multer");
function index(req, res) {
    console.log("getDoctors");
    db.db_connection.ready(function () {
        var doctorTable = db.db_connection.table("doctor");
        doctorTable.findAll().then(function (doctors) {
            console.log("SELECT * FROM doctor results: ");
            res.send(JSON.stringify(doctors));
        });
    });
}
exports.index = index;
function show(req, res) {
    console.log("getDoctor");
    var doctorId = req.params.id;
    db.db_connection.ready(function () {
        var doctorTable = db.db_connection.table("doctor");
        doctorTable.find(doctorId).then(function (doctors) {
            console.log("SELECT FROM doctor results: " + doctorId);
            res.send(JSON.stringify(doctors));
        });
    });
}
exports.show = show;
function getDoctorData(req, res) {
    console.log("getDoctorData server side ", __dirname);
    res.sendFile(path.resolve(__dirname, 'doctors.json'));
}
exports.getDoctorData = getDoctorData;
;
function create(req, res) {
    console.log("addDoctor ", req.body);
    var newDoctor = req.body;
    db.db_connection.ready(function () {
        var doctorTable = db.db_connection.table("doctor");
        doctorTable.save(newDoctor).then(function (result) {
            console.log("New doctor added: " + result.id);
            res.send(JSON.stringify(result));
        });
    });
}
exports.create = create;
function update(req, res) {
    console.log("update Doctor ", req.body);
    var newDoctor = req.body;
    db.db_connection.ready(function () {
        var doctorTable = db.db_connection.table("doctor");
        doctorTable.save(newDoctor).then(function (result) {
            console.log("Doctor updated: " + result.id);
            res.sendStatus(201);
        });
    });
}
exports.update = update;
function destroy(req, res) {
    console.log("deleteDoctorData server side ", req.params.id);
    var doctorId = req.params.id;
    db.db_connection.ready(function () {
        var doctorTable = db.db_connection.table("doctor");
        doctorTable.remove(doctorId, function (result) {
            console.log("Doctor deleted: " + doctorId);
            res.sendStatus(204);
        });
    });
}
exports.destroy = destroy;
function uploadFile(req, res) {
    // We are able to access req.files.file thanks to
    // the multiparty middleware
    //upload.single(req.file);
    console.log("Doctor param: " + req.param);
    res.status(204).end("Profile image uploaded");
}
exports.uploadFile = uploadFile;
