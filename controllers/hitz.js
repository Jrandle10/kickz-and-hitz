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


function show(req, res) {
  Hit.findById(req.params.id)
  .populate("owner")
  .then(hit => {
    res.render("hitz/show", {
      hit,
      title: "🎵 show"
    })
  })
  .catch(err => {
    res.redirect("/hitz")
    console.log(err)
  })
}

function edit(req,res) {
  Hit.findById(req.params.id)
  .then(hit => {
    res.render('hitz/edit', {
      hit,
      title: 'edit 🎵'
    })
  })
}

export {
  index,
  create,
  show,
  edit,
}