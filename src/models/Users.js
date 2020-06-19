const mongoose = require('mongoose')
const schema = mongoose.Schema

const UserSchema = new schema({
  user_name: {
    type:  String,
    required: [true, 'username is required'],
    minlength: [3, 'Must be greater than three characters'],
    maxlength: [100, 'Must not be greater than 100 Characters']
  },
  email: {
    type:  String,
    required: [true, 'email is required'],
    minlength: [3, 'Must be greater than three characters'],
    maxlength: [100, 'Must not be greater than 100 Characters']
  },
  first_name: {
    type:  String,
    required: [true, 'Your Firstname is required'],
    minlength: [3, 'Must be greater than three characters'],
    maxlength: [100, 'Must not be greater than 100 Characters']
  },
  last_name: {
    type:  String,
    required: [true, 'Your Lastname is required'],
    minlength: [2, 'Must be greater than two characters'],
    maxlength: [100, 'Must not be greater than 100 Characters']
  },
  date_registered: { type: Date, default: Date.now },
  phone: Number,
  status: String,
  role: String
})

module.exports = mongoose.model('User', UserSchema)