const express = require("express");
const router = express.Router();

// const connection = require("./database");
const connection = 'connect';

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

console.log('in user router');

module.exports = router;
