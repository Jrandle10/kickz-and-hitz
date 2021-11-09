import mongoose from 'mongoose'


const shoeSchema = new mongoose.model.Schema({
  brand: String,
  name: String,
  color: String
})

const Shoe = mongoose.model('Shoe', shoeSchema)

export {
  Shoe
}