const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

module.exports = mongoose.model('Message', msgSchema);