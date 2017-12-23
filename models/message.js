const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

const msgSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

msgSchema.post('remove', function (message) {
    User.findById(message.user)
        .then(user => {
            user.messages.pull(message);
            user.save();
        });
});

module.exports = mongoose.model('Message', msgSchema);