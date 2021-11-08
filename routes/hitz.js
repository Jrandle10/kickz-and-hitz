import { Router } from 'express'
import * as hitzCtrl from '../controllers/hitz.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()



// localhost:3000/hitz
router.get('/', hitzCtrl.index)

router.post('/', isLoggedIn, hitzCtrl.create)





export {
  router
}