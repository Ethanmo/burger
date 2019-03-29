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

    updateOne : function(tableName, burgerName, updateDevoured, cb){
        var queryStr = "UPDATE ? WHERE burger_name = ? SET devoured = ?";
        connection.query(queryStr, [tableName, burgerName, updateDevoured], function(err, result){
            if (err) throw err;
            console.table(result);
        })
    }
}

module.exports = orm;