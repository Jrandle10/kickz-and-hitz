
import { Profile } from '../models/profile.js'

function index(req, res) {
  console.log('Profiles')
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: '👤'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

export {
  index,
}