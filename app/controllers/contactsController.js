const Contact = require('../models/contact')

module.exports.list = (req, res) => {
    Contact.find({user: req.user._id})
        .then((contacts) => {
            res.json(contacts)
        })
        .catch((err) => {
            res.json(err)
        })
}
module.exports.show = (req, res) => {
    const id = req.params.id
    Contact.findById({_id: id, user:req.user._id}) 
        .then((contact) => {
            if (contact) {
                res.json(contact)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}
module.exports.count = (req, res) => {
    Contact.find()
        .then((contacts) => {
            res.json({
                count:contacts.length
            })
        })
}
module.exports.create = (req, res) => {
    const body = req.body
    const contact = new Contact(body)
    contact.user = req.user._id
    contact.save()
        .then((contact) => {
            res.json(contact)
        })
        .catch((err) => {
            res.json(err)
        })
}
module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Contact.findByIdAndUpdate({_id: id, user: req.user._id}, body, { new: true, runValidators: true })
        .then((contact) => {
            if (contact) {
                res.json(contact)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}
module.exports.destroy = (req, res) => {
    const id = req.params.id
    Contact.findByIdAndDelete({_id:id, user: req.user._id })
        .then((contact) => {
            if (contact) {
                res.json(contact)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}
