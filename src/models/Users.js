const mongoose = require('mongoose')
const schema = mongoose.Schema

const UserSchema = new schema({
  user_name: String,
  email: String,
  first_name: String,
  last_name: String,
  date_registered: { type: Date, default: Date.now },
  phone: Number,
  active: Boolean,
  role: String
})

module.exports = mongoose.model('User', UserSchema)