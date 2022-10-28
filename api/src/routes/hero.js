const heroesRouter = require('express').Router()
const imageUpload = require('../middleware/uploadFile')
const {
  getPhotosController,
  addNewHeroController,
  removeHeroController,
  getHeroByIdController,
  patchHeroController,
  uploadImageController,
} = require('../controllers/HeroControllers')

heroesRouter.get('/photos', getPhotosController)
heroesRouter.get('/:id', getHeroByIdController)
heroesRouter.post('/', imageUpload.array('images', 5), addNewHeroController)
heroesRouter.post('/image', uploadImageController)
heroesRouter.delete('/', removeHeroController)
heroesRouter.patch('/:id', patchHeroController)

module.exports = heroesRouter
