const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });
}

connection.connect(err => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
