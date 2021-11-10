import mongoose from 'mongoose'

const Schema = mongoose.Schema

const hitSchema = new Schema({
  artist: String,
  name: String,
  emotion: [String],
  owner: {
    type: Schema.Types.ObjectId, ref:'Profile'
  }
})

const Hit = mongoose.model('Hit', hitSchema)

export {
  Hit
}