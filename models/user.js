const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }]
});

userSchema.methods.toJSON = function () {
    return Object.assign(this.toObject(), {
        password: undefined,
        __v: undefined
    });
};

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);