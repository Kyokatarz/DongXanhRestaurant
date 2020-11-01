import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../util/secrets'

export const createJwt = (payload: object) => {
  try {
    const token = jwt.sign(payload, JWT_SECRET)
    return token
  } catch (err) {
    console.error(err)
    throw 'TokenInvalid'
  }
}

export const verifyJwt = (token: string) => {
  try {
    const decodedPayload = jwt.verify(token, JWT_SECRET)
    return decodedPayload
  } catch (err) {
    console.error(err)
    throw 'TokenInvalid'
  }
}
