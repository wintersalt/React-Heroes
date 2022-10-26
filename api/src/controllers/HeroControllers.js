const HeroModel = require('../models/HeroModel')

const addNewHeroController = async (req, res) => {
  const { nickname, real_name, origin_description, superpowers, catch_phrase } =
    req.body

  const newHero = new HeroModel({
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
  })

  try {
    const hero = await newHero.save()

    res.status(201).json(hero)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const patchHeroController = async (req, res) => {
  const { id } = req.params
  const updates = req.body // JSON

  console.log(updates)

  try {
    await HeroModel.findByIdAndUpdate(id, updates)
    res.status(201).json({ message: 'Successfully updated!' })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const removeHeroController = async (req, res) => {
  const { id_remove } = req.body

  try {
    await HeroModel.deleteOne({ _id: id_remove })

    res.status(201).json({ message: 'Successfully removed!' })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

module.exports = {
  addNewHeroController,
  removeHeroController,
  patchHeroController,
}
