"use strict";
var mysql = require('mysql'); // node-mysql module
var db = require("../connection/db");
function index(req, res) {
    console.log("Diagnoses index req.params", req.params);
    var name = req.params.name;
    db.db_connection.ready(function () {
        var diagnoseTable = db.db_connection.table("diagnose");
        diagnoseTable.findAll().then(function (diagnoses) {
            console.log("diagnoses = " + diagnoses);
            res.send(JSON.stringify(diagnoses));
        });
    });
}
exports.index = index;
function list(req, res) {
    console.log("List diagnoses", req.params);
    db.db_connection.ready(function () {
        var diagnoseTable = db.db_connection.table("diagnose");
        diagnoseTable.findAll().then(function (diagnoses) {
            console.log("diagnoses = " + diagnoses);
            res.send(JSON.stringify(diagnoses));
        });
    });
}
exports.list = list;
function create(req, res) {
    console.log("Add diagnose ", req.body);
    var newDiagnose = req.body;
    db.db_connection.ready(function () {
        var diagnoseTable = db.db_connection.table("diagnose");
        diagnoseTable.save(newDiagnose).then(function (result) {
            console.log("New diagnose added: " + result.id);
            res.sendStatus(200);
        });
        diagnoseTable.find(4).then(function (diagnoses) {
            console.log("SELECT FROM diagnose results: " + JSON.stringify(diagnoses));
        });
    });
}
exports.create = create;
function show(req, res) {
    var diagnoseId = req.params.id;
    db.db_connection.ready(function () {
        var diagnoseTable = db.db_connection.table("diagnose");
        diagnoseTable.find(diagnoseId).then(function (diagnoses) {
            console.log("SELECT FROM diagnose results: " + diagnoseId);
            res.send(JSON.stringify(diagnoses));
        });
    });
}
exports.show = show;
function update(req, res) {
    console.log("update Diagnose ", req.body);
    var newDiagnose = req.body;
    db.db_connection.ready(function () {
        var diagnoseTable = db.db_connection.table("diagnose");
        diagnoseTable.save(newDiagnose).then(function (result) {
            console.log("Diagnose updated: " + result.id);
            res.sendStatus(201);
        });
    });
}
exports.update = update;
function destroy(req, res) {
    var diagnoseId = req.params.id;
    db.db_connection.ready(function () {
        var diagnoseTable = db.db_connection.table("diagnose");
        diagnoseTable.remove(diagnoseId, function (result) {
            console.log("Diagnose deleted: " + diagnoseId);
            res.sendStatus(204);
        });
    });
}
exports.destroy = destroy;
