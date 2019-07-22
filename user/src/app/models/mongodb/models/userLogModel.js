import mongoose from 'mongoose'

const { Schema } = mongoose
const userLogSchema = new Schema({
  companyId: {
    type: Number,
  },
  userId: {
    type: Number,
    trim: true,
  },
  loginTime: {
    type: Date,
  },
  logoutTime: {
    type: Date,
  },
  logDateBucket: {
    type: Number,
  },
}, { collection: 'userLog' })

module.exports = mongoose.model('userLog', userLogSchema)
