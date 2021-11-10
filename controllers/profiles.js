
import { Profile } from '../models/profile.js'
import { Hit } from '../models/hit.js'


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

// function show(req, res) {
//   Profile.findById(req.params.id)
//   .then((profile) => {
//     Profile.findById(req.user.profile._id)
//     .then(self => {
//       const isSelf = self._id.equals(profile._id)
//       res.render("profiles/show", {
//         title: `👤 ${profile.name}'s profile`,
//         profile,
//         self,
//         isSelf,
//       })
//     })
//   })
//   .catch((err) => {
//     console.log(err)
//     res.redirect("/")
//   })
// }

function show(req, res) {
  Profile.findById(req.params.id)
  .then((profile) => {
    Hit.find({owner: req.params.id})
    .then(hit => {
        Profile.findById(req.user.profile._id)
        .then(self => {
          const isSelf = self._id.equals(profile._id)
          res.render("profiles/show", {
            title: `${profile.name}'s profile`,
            hit,
            profile,
            self,
            isSelf,
          })
        })
      })
      })
    }
  


export {
  index,
  show,
}