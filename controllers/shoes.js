import { Shoe } from '../models/shoe.js'

function index(req, res) {
  Shoe.find({})
  .then(shoes => {
    res.render('shoes/index', {
      shoes,
      title: '👟'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/shoes")
  })
}

function create(req,res) {
  req.body.owner = req.user.profile._id
  Shoe.create(req.body)
  .then(shoe => {
    res.redirect('/shoes')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/shoes')
  })
}

export {
  index,
  create,
}