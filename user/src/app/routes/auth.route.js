import express from 'express'
import auth from '../controllers/auth.ctrl'

const router = express.Router(); // eslint-disable-line new-cap

router.route('/login')
  .post(auth.login)

router.route('/register/customer')
  .post(auth.register)

router.route('/reset/password/email')
  .post(auth.resetPasswordMail)

router.route('/reset/password')
  .post(auth.resetPassword)

router.route('/resend/email')
  .post(auth.resendEmail)

router.route('/email/emailValidity')
  .post(auth.emailValidity)

router.route('/verify')
  .put(auth.verify)

router.route('/logout')
  .post(auth.userLogout)

router.route('/invitation')
  .put(auth.putInvitation)

router.route('/email-checking')
  .post(auth.emailChecking)

export default router
