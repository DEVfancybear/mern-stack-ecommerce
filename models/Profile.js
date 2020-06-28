const mongoose = require('mongoose');


const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String, required: true, unique: true, index: true, dropDups: true,
  },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
