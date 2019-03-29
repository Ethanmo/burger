var orm = require('../config/orm');

var burger = {
    getAll : function(cb){
        orm.selectAll("burgers_db", function(res){
            cb(res);
        });
    },

    create : function(newName, cb) {
        orm.insertOne("burgers_db", newName, function(res){
            cb(res);
        })
    },

    update : function(burgerName, updatedDevoured, cb) {
        orm.updateOne("burgers_db", burgerName, updatedDevoured, function(res){
            cb(res);
        })
    }
}

module.exports = burger;