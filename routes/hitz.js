import { Router } from 'express'
import * as hitzCtrl from '../controllers/hitz.js'

const router = Router()




router.get('/', hitzCtrl.index)





export {
  router
}