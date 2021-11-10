import mongoose from 'mongoose'

const Schema = mongoose.Schema


const shoeSchema = new Schema ({
  brand: String,
  name: String,
  color: String,
  owner: {type: Schema.Types.ObjectId, 'ref': 'Profile'}
})

const Shoe = mongoose.model('Shoe', shoeSchema)

export {
  Shoe
}