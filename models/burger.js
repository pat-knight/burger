const orm = require('../config/orm');

const burger = {
    //select
    all: (cb) => {
        orm.selectAll('burgers', res => {
            cb(res);
        });
    }, 
    create: (name, cb) => {
        orm.insertOne('burgers', name, res => {
            cb(res);
        });
    },
    update: (obj, condition, cb) => {
        orm.updateOne('burgers', obj, condition, res => {
            cb(res);
        });
    },
};

module.exports = Burger;