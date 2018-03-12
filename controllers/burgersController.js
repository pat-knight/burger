const express = require('express');
const router = require('express').Router()
const burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.all(result => {
        res.render('index', {burgers: result});
    });
});

module.exports = router;

