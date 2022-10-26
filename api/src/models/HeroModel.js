const mongoose = require('mongoose')

const HeroSchema = new mongoose.Schema({
  nickname: { type: String, required: true },
  real_name: { type: String, required: true },
  origin_description: { type: String, required: true },
  superpowers: { type: String, required: true },
  catch_phrase: { type: String, required: true },
})

const HeroModel = mongoose.model('HeroModel', HeroSchema)

module.exports = HeroModel
