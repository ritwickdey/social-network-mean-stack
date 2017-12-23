const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const { MY_SECRET_KEY } = require('../jwt-key/jwt-key');

const Message = require('../models/message');

router.get('/', (req, res, next) => {
    Message.find()
        .then(messages => {
            res.status(200).json({
                message: 'Suceess',
                obj: messages
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

// &token=xxxx
router.use('/', (req, res, next) => {
    jwt.verify(req.query.token, MY_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }
        next();
    });
});

router.post('/', (req, res, next) => {
    const message = new Message({
        content: req.body.content
    });

    message.save()
        .then(result => {
            res.status(201).json({
                message: 'Saved Message',
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

router.patch('/:id', (req, res, next) => {
    Message.findById(req.params.id)
        .then(message => {
            if (!message)
                return res.status(404).json({
                    title: 'No Message Found!',
                    error: {
                        message: 'Message Not Found!'
                    }
                });

            message.content = req.body.content;
            message.save()
                .then(result => {
                    res.status(200).json({
                        message: 'Updated Message',
                        obj: result
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

router.delete('/:id', (req, res, next) => {
    Message.findByIdAndRemove(req.params.id)
        .then(message => {
            if (!message) {
                return res.status(404).json({
                    title: 'No Message Found!',
                    error: {
                        message: 'Message Not Found!'
                    }
                });
            }
            res.status(200).json({
                message: 'Message Deleted',
                obj: message
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