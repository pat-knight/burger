const connection = require('/connection.js');

orm = {
    selectAll: () => {
        const query = 'select * from ??';
        connection.query(query, )
    }
}
//selectAll()
//insertOne()
//updateOne()

module.exports = orm 
