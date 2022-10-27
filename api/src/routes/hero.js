const heroesRouter = require('express').Router()
const imageUpload = require('../middleware/uploadFile')
const {
  addNewHeroController,
  removeHeroController,
  getHeroByIdController,
  patchHeroController,
} = require('../controllers/HeroControllers')

heroesRouter.post('/', imageUpload.array('images', 5), addNewHeroController)
heroesRouter.get('/:id', getHeroByIdController)
heroesRouter.delete('/', removeHeroController)
heroesRouter.patch('/:id', patchHeroController)

module.exports = heroesRouter
