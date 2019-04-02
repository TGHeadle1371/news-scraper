'use strict';


// dependencies
// =============================================================
const express = require('express'),
    router = express.Router(),
    request = require('request'),
    cheerio = require('cheerio'),
    Article = require('../../models/article'),
    Note = require('../../models/note');

router.get('/', function (req, res) {
    res.status(200).send('<h3><a href=\'/\'>Home</a></h3><br><h3><a href=\'/api/articles/\'>Article APIs</a></h3><br><h3><a href=\'/api/notes/\'>Note APIs</a></h3>');
});

router.use('/articles', require('./articles'));
router.use('/notes', require('./notes'));

module.exports = router;