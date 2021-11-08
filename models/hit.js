import mongoose from 'mongoose'

const Schema = mongoose.Schema

const hitSchema = new Schema({
  artist: String,
  name: String,
  emotion: [String]
})