import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  username: string;
  password: string;
  email: string;
  firstName?: string;
  lastName?: string;
  isAdmin: boolean;
}

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
})

export default mongoose.model<UserDocument>('user', UserSchema)
