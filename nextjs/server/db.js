const mysql = require('mysql');

const db = createPool({
connectionLimit: 10,
host: "db4free.net",
user: "adsunicesumar",
password: "unicesumar",
database: "ads5semestre"
})

export default db;

