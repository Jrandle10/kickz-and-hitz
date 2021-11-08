import { Hit } from '../models/hit.js'

function index(req, res) {
  Hit.find ({})
  
}


export {
  index,
}