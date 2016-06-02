"use strict";
var mysql = require('mysql'); // node-mysql module
var path = require('path');
var db = require("../connection/db");
var bodyParser = require('body-parser');
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
    //    var patient =  {
    //  firstname: 'Miodrag',
    //  lastname: 'Pavkovicc3',
    //  middlename: '',
    //  gender: 'M',
    //  address: 'Kragujevacka 29',
    //  place: '',
    //  birthdate: '2016-04-06T12:23:00.000Z',
    //  email: 'mpavkovic@gmail.com',
    //  phone: '',
    //  mobilephone: '' }
    db.db_connection.ready(function () {
        var patientTable = db.db_connection.table("patient");
        patientTable.save(newPatient).then(function (result) {
            console.log("New patient added: " + result.id);
            res.sendStatus(200);
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
