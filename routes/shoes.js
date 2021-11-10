import { Router } from 'express'
import * as shoesCtrl from '../controllers/shoes.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//localhost:3000/shoes
router.get('/', shoesCtrl.index)
//localhost:3000/shoes/:id
router.get('/:id', shoesCtrl.show)
//localhost:3000/shoes/:id/edit
router.get('/:id/edit', isLoggedIn, shoesCtrl.edit)
//localhost:3000/shoes
router.post('/', isLoggedIn, shoesCtrl.create)
//localhost:3000/shoes/:id
router.put('/:id', isLoggedIn, shoesCtrl.update)








export {
  router
}