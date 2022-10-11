const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    comment: {type:String, required: true},
    author: {type: String, required: true}

},
{timestamps: true})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment