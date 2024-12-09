const express = require("express");
const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017");

const users = client.db("Castly").collection("users");

// bdl had test li ltaht bhaja khra drtha a3la wd l'objet hhh

const test = client.db("Castly").collection("");
// const test2 = client.db("Castly").collection("");
// const test3 = client.db("Castly").collection("");
module.exports = { users, test };
