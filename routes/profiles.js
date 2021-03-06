import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()
//localhost:3000/profiles
router.get('/', isLoggedIn, profilesCtrl.index)
//localhosr:3000/profiles/:id
router.get('/:id', isLoggedIn, profilesCtrl.show)


export {
  router
}