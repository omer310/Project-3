const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password:"121920",
    database:"major_database",
    host:"localhost",
    port: 5432

});

module.exports = pool;