var express = require('express');

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res){
    burger.getAll(function(result){

    })
})

module.exports = router;