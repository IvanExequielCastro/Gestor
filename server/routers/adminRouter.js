const express = require("express");
const router = express.Router();

const connection = require("../database/index");

const dataBaseName = 'DB';
const tableName = 'table';

router.get("/all/", (req, res, next) => {
    // next();
    connection.query(`SELECT * FROM ${tableName}`, (err, rows) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

console.log('in admin router');

module.exports = router;
