const orm = require('../config/orm');

const burger = {
    //select
    all: (cb) => {
        orm.selectAll('burgers', res => {
            cb(res);
        });
    }, 
    create: () => {
        orm.insertOne
    },
    update: () => {
        orm.updateOne
    },
    //create
    //update
};

module.exports = Burger;