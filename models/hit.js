import mongoose from 'mongoose'

const Schema = mongoose.Schema

const hitSchema = new Schema({
  artist: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  emotion: {
  type: String,
  enum: ['Amused', 'Annoyed', 'Anxious', 'Beautiful', 'Relaxed', 'Dreamy', 'Pumped', 'Defiant', 'Cheerful', 'Depressed', 'Scared', 'Heroic'],
  required: true
  },
  owner: {
    type: Schema.Types.ObjectId, ref:'Profile'
  }
})

const Hit = mongoose.model('Hit', hitSchema)

export {
  Hit
}