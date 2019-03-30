var connection = require('./connection');

var orm = {
    selectAll : function(tableName, cb){
        var queryStr = "SELECT * FROM ?";
        connection.query(queryStr, [tableName], function(err, result){
            if (err) throw err;
            cb(result);
        })
    },

    insertOne : function(tableName, newBurgerName, cb){
        var queryStr = "INSERT INTO ?(burger_name) VALUE(?)";
        connection.query(queryStr, [tableName, newBurgerName], function(err, result){
            if (err) throw err;
            cb(result);
        })
    },

    updateOne : function(tableName, id, updateDevoured, cb){
        var queryStr = "UPDATE ? WHERE id = ? SET devoured = ?";
        connection.query(queryStr, [tableName, id, updateDevoured], function(err, result){
            if (err) throw err;
            console.table(result);
        })
    }
}

module.exports = orm;