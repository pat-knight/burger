const connection = require('/connection.js');

function format(obj) {
    let arr = [];
    for (let key in obj) {
        let value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >=0) {
                value = `'${value}'`;
            }
            arr.push(`${key} = ${value}`)
        }
    }
    return arr.toString()
}

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
    updateOne: (table, obj, condition, cb) => {
        const query = `update ${table} set ${format(obj)} where ${condition}}`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm 
