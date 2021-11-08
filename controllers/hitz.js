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

function create(req, res) {
  req.body.owner = req.user.profile._id
  Hit.create(req.body)
  .then(hit => {
    res.redirect('/hitz')
  })
  .catch(err => {
    res.redirect('/hitz')
  })
}


export {
  index,
  create,
}