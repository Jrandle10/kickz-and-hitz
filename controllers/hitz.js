import { Hit } from '../models/hit.js'

function index(req, res) {
  Hit.find({})
  .then(hitz => {
    res.render('hitz/index', {
      hitz,
      title: '🎵'
    })
  })
  .catch(err => {
    res.redirect('/hitz')
  })
}


export {
  index,
}