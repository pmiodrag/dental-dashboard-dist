"use strict";
var mysql = require('mysql'); // node-mysql module
var db = require("../connection/db");
function index(req, res) {
    console.log("Agenda index req.params", req.params);
    var name = req.params.name;
    db.db_connection.ready(function () {
        var agendaTable = db.db_connection.table("agenda");
        agendaTable.findAll().then(function (events) {
            console.log("events = " + events);
            res.send(JSON.stringify(events));
        });
    });
}
exports.index = index;
function create(req, res) {
    console.log("Add event ", req.body);
    var newEvent = req.body;
    db.db_connection.ready(function () {
        var agendaTable = db.db_connection.table("agenda");
        agendaTable.save(newEvent).then(function (result) {
            console.log("New event added: " + result.id);
            res.send(JSON.stringify(result));
        });
    });
}
exports.create = create;
function update(req, res) {
    console.log("update Diagnose ", req.body);
    var newEvent = req.body;
    db.db_connection.ready(function () {
        var agendaTable = db.db_connection.table("agenda");
        agendaTable.save(newEvent).then(function (result) {
            console.log("Event updated: " + result.id);
            res.sendStatus(201);
        });
    });
}
exports.update = update;
function destroy(req, res) {
    var eventId = req.params.id;
    db.db_connection.ready(function () {
        var agendaTable = db.db_connection.table("agenda");
        agendaTable.remove(eventId, function (result) {
            console.log("Event deleted: " + eventId);
            res.sendStatus(204);
        });
    });
}
exports.destroy = destroy;
