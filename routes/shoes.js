import { Router } from 'express'
import * as shoesCtrl from '../controllers/shoes.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//localhost:3000/shoes
router.get('/', shoesCtrl.index)
//localhost:3000/shoes
router.post('/', isLoggedIn, shoesCtrl.create)








export {
  router
}