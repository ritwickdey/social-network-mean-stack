const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('node');
});


router.post('/', function (req, res, next) {
    const email = req.body.email;
    const user = new User({
        firstName: 'Akash',
        lastName: 'Dey',
        password: 'pass',
        email: email
    });

    user.save()
        .then(e => {
            res.redirect('/');
        });
});

module.exports = router;