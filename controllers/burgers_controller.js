var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res){
    burger.getAll(function(result){
        //console.log("current db", {burgers: result});
        res.render("index", {burgers: result});
    });
});

router.post("/api/burgers", function(req, res){
    //console.log(req.body);
    burger.create(req.body.burger_name, function(result){
        //console.log("added burger", { id: result.insertId });
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res){
    burger.update(req.params.id, req.body.devoured, function(result){
        if (result.changedRow == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;