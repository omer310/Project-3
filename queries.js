const Pool = require("pg").Pool;

const pool = new Pool({
    user: "me",
    password:"121920",
    database:"api",
    host:"localhost",
    port: 5432

});

module.exports = pool;