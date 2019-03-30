var connection = require('./connection');

var orm = {
    selectAll : function(tableName, cb){
        var queryStr = "SELECT * FROM " + tableName;
        connection.query(queryStr, function(err, result){
            if (err) throw err;
            cb(result);
        })
    },

    insertOne : function(tableName, newBurgerName, cb){
        var queryStr = "INSERT INTO " + tableName + " (burger_name) VALUE('" + newBurgerName + "')";
        connection.query(queryStr, function(err, result){
            if (err) throw err;
            cb(result);
        })
    },

    updateOne : function(tableName, id, updateDevoured, cb){
        var queryStr = "UPDATE " + tableName + " SET devoured = " + updateDevoured + " WHERE id = " + id;
        connection.query(queryStr, function(err, result){
            if (err) throw err;
            //console.table(result);
            cb(result);
        })
    }
}

module.exports = orm;