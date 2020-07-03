const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const participantSchema = {
    name: String,
    regNo: {
        type: String,
        required: true
    },
    phoneNo: String,
    email: String
}

const hackParticipationSchema = {
    hackName: {
        type: Schema.Types.ObjectId,
        ref: 'Hackathon',
        required: true
    },
    participants: [participantSchema]
}

module.exports = mongoose.model('Post', hackParticipationSchema);