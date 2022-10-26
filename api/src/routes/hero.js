const heroesRouter = require('express').Router()
const {
  addNewHeroController,
  removeHeroController,
  patchHeroController
} = require('../controllers/HeroControllers')

heroesRouter.post('/', addNewHeroController)
heroesRouter.delete('/', removeHeroController)
heroesRouter.patch('/:id', patchHeroController)

module.exports = heroesRouter
