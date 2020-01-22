const mongoose = require('mongoose')

const Schema = mongoose.Schema
const contactSchema = new Schema({ 
    name: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact