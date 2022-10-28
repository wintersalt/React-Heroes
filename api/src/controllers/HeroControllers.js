const uploadImage = require('../utils/cloudinary')
const HeroModel = require('../models/HeroModel')
const dotenv = require('dotenv')
const axios = require('axios')
const fs = require('fs')

const { parsed: config } = dotenv.config()

const BASE_URL = `https://api.cloudinary.com/v1_1/${config.CLOUD_NAME}/resources/image`
const auth = {
  username: config.API_KEY,
  password: config.API_SECRET,
}

const getPhotosController = async (req, res) => {
  const response = await axios.get(BASE_URL, { auth })

  return res.send(response.data)
}

const uploadImageController = async (req, res) => {
  const { image } = req.body

  console.log(image)

  try {
    await uploadImage(image)
    res.status(200)
  } catch (error) {
    res.status(400)
    console.error(error)
  }
}

const addNewHeroController = async (req, res) => {
  const { nickname, real_name, origin_description, superpowers, catch_phrase } =
    req.body

  const images = req.files

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

    images.forEach((image) => {
      fs.unlink(`./src/images/${image.name}`, (err) => {
        if (err) console.log('Image not found: ' + image.name)
      })
    })

    await HeroModel.deleteOne({ _id: id_remove })

    res.status(201).json({ message: 'Successfully removed!' })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

module.exports = {
  getPhotosController,
  addNewHeroController,
  getHeroByIdController,
  patchHeroController,
  removeHeroController,
  uploadImageController,
}
