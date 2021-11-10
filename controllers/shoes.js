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

function show(req, res) {
  Shoe.findById(req.params.id)
  .populate("owner")
  .then(shoe => {
    res.render('shoes/show', {
      shoe,
      title: "👟 show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/shoes')
  })
}


function edit(req, res) {
  Shoe.findById(req.params.id)
  .then(shoe => {
    res.render('shoes/edit', {
      shoe,
      title: "edit 👟"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/shoes')
  })
}

function update(req, res) {
  Shoe.findById(req.params.id)
  .then(shoe => {
    if (shoe.owner.equals(req.user.profile._id)) {
      shoe.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/shoes/${shoe._id}`)
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/shoes`)
  })
}

export {
  index,
  create,
  show,
  edit,
  update,
}