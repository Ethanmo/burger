var orm = require('../config/orm');

var burger = {
    getAll : function(cb){
        orm.selectAll("burgers_db.burgers", function(res){
            cb(res);
        });
    },

    create : function(newName, cb) {
        orm.insertOne("burgers_db.burgers", newName, function(res){
            cb(res);
        })
    },

    update : function(id, updatedDevoured, cb) {
        orm.updateOne("burgers_db.burgers", id, updatedDevoured, function(res){
            cb(res);
        })
    }
}

module.exports = burger;