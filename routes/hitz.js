import { Router } from 'express'
import * as hitzCtrl from '../controllers/hitz.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()



// localhost:3000/hitz
router.get('/', hitzCtrl.index)
// localhost:3000/hitz/:id
router.get('/:id', hitzCtrl.show)
//localhost:3000/hitz/:id/edit
router.get('/:id/edit', isLoggedIn, hitzCtrl.edit)
// localhost:3000/hitz
router.post('/', isLoggedIn, hitzCtrl.create)




export {
  router
}