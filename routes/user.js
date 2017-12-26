const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const { JWT_SECRET_KEY } = require('../secret/config');

router.post('/', (req, res, next) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
    });

    user.save().then(result => {
        res.status(201).json({
            message: 'User Created',
            obj: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                title: 'An Error Occurred',
                error: err
            });
        });
});

router.post('/signin', (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
                return res.status(401).json({
                    title: 'Go To Hell..!! Unauthorized!!',
                    error: {
                        message: 'Invalid Login Credentials'
                    }
                });
            }
            jwt.sign({ user: user }, JWT_SECRET_KEY, { expiresIn: 7200 }, (err, token) => {
                if (err) throw new Error('Token Creation Failed');
                res.status(201).json({
                    title: 'Login successful. Credentials are matched',
                    token: token,
                    userId: user._id
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                title: 'An Error Occurred',
                error: err
            });
        });
});


module.exports = router;