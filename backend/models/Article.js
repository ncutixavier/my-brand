const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: String,
    content: String
})

const Article = mongoose.model("Article", schema)
module.exports = Article
