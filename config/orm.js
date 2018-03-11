const connection = require('/connection.js');

const orm = {
    selectAll: (table, cb) => {
        const query = `select * from ${table};`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (table, name, cb) => {
        const query = `insert into burgers values ('${name}')`
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: (table, col, val, id, objId) => {
        const query = `update ${table} set `;
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
}
//selectAll()
//insertOne()
//updateOne()

module.exports = orm 
