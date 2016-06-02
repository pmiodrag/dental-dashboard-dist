"use strict";
var mysql = require('mysql'); // node-mysql module
var db = require("../connection/db");
function index(req, res) {
    console.log("Treatments index req.params", req.params);
    var patientid = req.params.id;
    var firstname = req.params.firstname;
    var lastname = req.params.lastname;
    console.log("selectTreatments for patientId = " + patientid);
    db.db_connection.ready(function () {
        var treatmentTable = db.db_connection.table("treatment");
        treatmentTable.findAll({ patientId: '=' + patientid }).then(function (treatments) {
            console.log("treatments = " + treatments);
            res.send(JSON.stringify(treatments));
        });
    });
}
exports.index = index;
function list(req, res) {
    console.log("List treatments", req.params);
    db.db_connection.ready(function () {
        var treatmentTable = db.db_connection.table("treatment");
        treatmentTable.findAll().then(function (treatments) {
            console.log("treatments = " + treatments);
            res.send(JSON.stringify(treatments));
        });
    });
}
exports.list = list;
function treatmentlist(req, res) {
    console.log("Treatments index req.params", req.params);
    var patientId = req.params.id;
    console.log("selectTreatments for patientId = ", patientId);
    var treatmentsJson = '';
    db.db_connection.ready(function () {
        var treatmentTable = db.db_connection.table("treatment");
        var patientTable = db.db_connection.table("patient");
        var criteria = patientTable.criteria
            .where("id").eq(patientId)
            .build();
        console.log('criteria ', criteria);
        patientTable.findAll(criteria, function (results) {
            console.log('A lot of queries executed here, you can guess them :)');
            console.log(results);
            treatmentsJson = JSON.stringify(results);
            console.log("results = " + results);
            res.send(results);
        });
        console.log('A lot of you can guess them :)');
        //     treatmentTable.findAll({patientId:'='+patientId}).then(function(treatments){
        //    console.log("treatments = "+treatments);
        //        treatmentsJson = JSON.stringify(treatments);
        //        var patientTreatmentsJson = {'patient':{'firstname':'Name'}, 'treatments':treatmentsJson}
        //        console.log("patientTreatmentsJson = "+patientTreatmentsJson);
        //        res.send(patientTreatmentsJson);
        //     });
    });
}
exports.treatmentlist = treatmentlist;
function create(req, res) {
    console.log("Add treatment ", req.body);
    //    var insert = { id: 1,
    //                    patientid: 2,
    //                    treatmentdate: '2016-04-06T12:20:00.000Z',
    //                    therapy: 'dsada',
    //                    diagnose: 'sada',
    //                    price: 'sadas' }
    // 
    var newTreatment = req.body;
    db.db_connection.ready(function () {
        var treatmentTable = db.db_connection.table("treatment");
        treatmentTable.save(newTreatment).then(function (result) {
            console.log("New treatment added: " + result.id);
            res.sendStatus(200);
        });
        treatmentTable.find(4).then(function (treatments) {
            console.log("SELECT FROM treatment results: " + JSON.stringify(treatments));
        });
    });
}
exports.create = create;
function show(req, res) {
    console.log("getPatient");
    var treatmentId = req.params.id;
    db.db_connection.ready(function () {
        var treatmentTable = db.db_connection.table("treatment");
        treatmentTable.find(treatmentId).then(function (treatments) {
            console.log("SELECT FROM treatment results: " + treatmentId);
            res.send(JSON.stringify(treatments));
        });
    });
}
exports.show = show;
function update(req, res) {
    console.log("update Treatment ", req.body);
    var newTreatment = req.body;
    db.db_connection.ready(function () {
        var treatmentTable = db.db_connection.table("treatment");
        treatmentTable.save(newTreatment).then(function (result) {
            console.log("Treatment updated: " + result.id);
            res.sendStatus(201);
        });
    });
}
exports.update = update;
function destroy(req, res) {
    console.log("deletePatientData server side ", req.params.id);
    var treatmentId = req.params.id;
    db.db_connection.ready(function () {
        var treatmentTable = db.db_connection.table("treatment");
        treatmentTable.remove(treatmentId, function (result) {
            console.log("Treatment deleted: " + treatmentId);
            res.sendStatus(204);
        });
    });
}
exports.destroy = destroy;
