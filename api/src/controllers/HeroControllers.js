const HeroModel = require('../models/HeroModel')
const fs = require('fs')

const addNewHeroController = async (req, res) => {
  const { nickname, real_name, origin_description, superpowers, catch_phrase } =
    req.body

  const images = req.files

  console.log('Images: ', images)

  const newHero = new HeroModel({
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images: images.map((image) => {
      return { name: image.filename }
    }),
  })

  try {
    const hero = await newHero.save()

    res.status(201).json(hero)
  } catch (err) {
    res.status(400).json({ message: 'Ooops, Something went wrong...' })
  }
}

const getHeroByIdController = async (req, res) => {
  const { id } = req.params

  try {
    const entry = await HeroModel.findById(id)

    res.status(201).json({ entry })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const patchHeroController = async (req, res) => {
  const { id } = req.params
  const updates = req.body

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
    const { images } = await HeroModel.findById(id_remove)

    console.log(images)

    images.forEach((image) => {
      fs.unlink(`./src/images/${image.name}`, (err) => {
        if (err) res.status(400).json({ message: 'Images not found...' })
      })
    })

    await HeroModel.deleteOne({ _id: id_remove })

    res.status(201).json({ message: 'Successfully removed!' })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

module.exports = {
  addNewHeroController,
  removeHeroController,
  getHeroByIdController,
  patchHeroController,
}
