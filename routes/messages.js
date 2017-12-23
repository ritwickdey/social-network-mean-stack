const express = require('express');
const router = express.Router();

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
                return res.status(500).json({
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

module.exports = router;