import jwt from 'jsonwebtoken'
import passport from 'passport'
import config from '../config' // eslint-no-console
const {
  secret, session, expiresIn, issuer, audience, algorithm,
} = process.env.NODE_ENV === 'production' ? config.production.jwt : config.development.jwt

const signOptions = {
  expiresIn, issuer, audience, algorithm,
}

export const auth = passport.authenticate('jwt', { session })

export function getToken(data) {
  return jwt.sign(data, secret, signOptions)
}
