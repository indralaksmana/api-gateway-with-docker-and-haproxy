// import required modules
import bCrypt from 'bcryptjs'

// START HASH PASSWORD
const hashPassword = (password, nullable = false) => new Promise((resolve, reject) => {
  // if nullable is true then hash password
  if (!nullable) {
    const salt = bCrypt.genSaltSync(10)
    return bCrypt.hash(password, salt, (err, hash) => {
      // eslint-disable-next-line no-unused-expressions
      (err) && reject(err);
      // eslint-disable-next-line no-unused-expressions
      (hash) && resolve(hash.replace('$2a$', '$2y$'))
    })
  }
  return resolve(undefined)
})
// END HASH PASSWORD

export default { hashPassword }
