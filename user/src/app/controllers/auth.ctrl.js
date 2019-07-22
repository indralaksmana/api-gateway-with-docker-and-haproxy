// import all module
import _ from 'lodash'
import moment from 'moment'
import randomstring from 'randomstring'
import { sequelize } from 'sequelize'
import mongodb from '../models/mongodb/models'

// import constanta
import { HTTP_STATUS, HTTP_MESSAGE } from '../../config/message'
import { USER_STATUS } from '../../config/const'

// import requeired utility
import { getToken } from '../../middleware'
import crypto from '../../utility/crypto'
import hashPassword from '../../utility'

// import all service
import authService from '../services/auth.service'
import userService from '../services/user.service'
import companyService from '../services/company.service'
import settingService from '../services/setting.service'

async function addUser(req, res) {
  const {
    // userinfo
    userFullname,
    userEmail,
    userPhone,
    userPassword,
    userPasswordConfirm,
    userKnoweximku,
    // companyInfo
    companyName,
    companyAddress,
  } = req.body
  const loginData = { username: userEmail, password: userPassword }
  await hashPassword(userPassword).then((hashedPassword) => {
    const verifcode = randomstring.generate(64)
    return authService.login(loginData)
      .then((data) => {
        res.status(HTTP_STATUS.SERVER_ERROR).json({ message: 'Email is already registered' })
      }).catch((err) => {
        if (userPassword === userPasswordConfirm) {
          sequelize.transaction((t) => {
            const created_at = moment().format('YYYY-MM-DD HH:mm:ss')
            // table company
            const companyValue = {
              compname: companyName,
              compaddress: companyAddress,
              comptp: 'USER',
              created_at,
              updated_at: created_at,
            }
            // create company, if success create user
            return userService.createCompany(companyValue, { transaction: t }).then((company) => {
              const userValue = {
                username: userEmail,
                password: hashedPassword,
                email: userEmail,
                codeusertype: USER_STATUS.unconfirmed_user,
                id_company: company.id,
                verifcode,
                statverif: 0,
                fullname: userFullname,
                phone: userPhone,
                knoweximku: userKnoweximku,
                codereferal: null,
                userrating: 0,
                status: 'OPEN',
                created_at,
                updated_at: created_at,
                created_user: 0,
                modified_user: 0,
              }
              // create user, if success create compdet
              return userService.createUser(userValue, { transaction: t }).then((user) => {
                const compdetValue = {
                  id_user: user.id,
                  id_company: company.id,
                  status: 1,
                  created_at,
                  created_user: 0,
                  modified_user: 0,
                  updated_at: created_at,
                }
                return userService.createCompdet(compdetValue, { transaction: t });
              })
            })
          }).then((t_res) => {
            const { id_user, id_company } = t_res
            const response = {
              userId: id_user,
              userEmail,
              userFullname,
              companyId: id_company,
              isSuccessful: true,
              companyName,
            }

            const templateEmail = {
              recipient: {
                email: userEmail,
                fullName: userFullname,
                companyName,
              },
              body: {
                encryptedVerifcode: crypto.encrypt({
                  companyId: id_company,
                  userId: id_user,
                  userEmail,
                  verifcode,
                }),
              },
            }
            // mailer.sendVerificationEmail(templateEmail)

            const userInfo = {
              fullName: userFullname,
              companyName,
              userEmail,
              created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
              companyAddress,
              userPhone,
            }

            const sendEmailsToDev = [
              {
                email: 'erma.ramadhani@andalin.com',
                fullname: 'Anggiyasti',
              },
            ]

            const sendEmailsToProd = [
              {
                email: 'anggiyasti@andalin.com',
                fullname: 'Anggiyasti',
              },
              // sales
              {
                email: 'utami.handoyo@andalin.com',
                fullname: 'Sales Andalin',
              }, {
                email: 'harold.purba@andalin.com',
                fullname: 'Sales Andalin',
              }, {
                email: 'alfan@andalin.com',
                fullname: 'Sales Andalin',
              }, {
                email: 'dessy.pratiwi@andalin.com',
                fullname: 'Sales Andalin',
              }, {
                email: 'fitri.yani@andalin.com',
                fullname: 'Sales Andalin',
              }, {
                email: 'hans.aditiyan@andalin.com',
                fullname: 'Sales Andalin',
              }, {
                email: 'ade.heri@andalin.com',
                fullname: 'Sales Andalin',
              }, {
                email: 'ucu.herdani@andalin.com',
                fullname: 'Sales Andalin',
              }, {
                email: 'telesales1@andalin.com',
                fullname: 'Sales Andalin',
              }, {
                email: 'telesales2@andalin.com',
                fullname: 'Sales Andalin',
              }, {
                email: 'telesales3@andalin.com',
                fullname: 'Sales Andalin',
              }, {
                email: 'telesales4@andalin.com',
                fullname: 'Sales Andalin',
              }, {
                email: 'marketing@andalin.com',
                fullname: 'Sales Andalin',
              }, {
                email: 'rifki@andalin.com',
                fullname: 'Rifki',
              },
              // operation
              // {
              //   email: 'andrew@andalin.com',
              //   fullname: 'Operation Andalin',
              // }, {
              //   email: 'budi.ihramsyah@andalin.com',
              //   fullname: 'Operation Andalin',
              // }, {
              //   email: 'oktoviriko.adjam@andalin.com',
              //   fullname: 'Operation Andalin',
              // }, {
              //   email: 'aldi.rubian@andalin.com',
              //   fullname: 'Operation Andalin',
              // },
            ]

            const sendEmailsTo = process.env.NODE_ENV === 'production' ? sendEmailsToProd : sendEmailsToDev
            _.map(sendEmailsTo, (el) => {
              const templateEmailGroup = {
                recipient: {
                  email: el.email,
                  fullName: el.fullname,
                },
                body: {
                  userInfo,
                },
              }
              // mailer.sendNewSignupEmail(templateEmailGroup)
            })
            const templateEmailAdmin = {
              recipient: {
                email: 'admandalin@yahoo.com',
                fullName: 'Andalin',
              },
              body: {
                userInfo,
              },
            }
            // mailer.sendNewSignupEmail(templateEmailAdmin)
            console.log('Registered')
            return res.status(HTTP_STATUS.OK).json(response)
          }).catch((err) => {
            console.log(err)
            return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: HTTP_MESSAGE.SERVER_ERROR })
          })
        } else {
          return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: 'Password does not match' })
        }
      })
  }).catch((err) => {
    console.log(err)
    return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: HTTP_MESSAGE.SERVER_ERROR })
  })
}

async function login(req, res) {
  const loginData = req.body

  if (!loginData.username || !loginData.password) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({ message: 'Username or password is required' })
  }

  await authService.login(loginData)
    .then((data) => {
      if (data === false) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({ message: 'Invalid password' })
      } else {
        console.log(data.codeusertype)
        if (data.statverif === 0) {
          res.status(HTTP_STATUS.BAD_REQUEST).json({ message: 'Click verification link first to verify your email. Check your mailbox.' })
        } else {
          console.log(data.codeusertype)
          if (data.codeusertype === 'USRA' || data.codeusertype === 'USRS') {
            const dataToken = {
              companyId: data.companyId,
              companyUserId: data.companyUserId,
              companyUserUsername: data.companyUserUsername,
              codeusertype: data.codeusertype,
            }
            companyService.getById(data.companyId)
              .then((company) => {
                const profile = {
                  customerUsername: data.username,
                  customerName: data.fullname,
                  customerEmail: data.email,
                  customerPhone: data.phone,
                  companyName: company.compname,
                  companyAddress: company.compaddress,
                  companyHeadQuarter: company.companyheadquarter,
                  status: data.status,
                  codeUserType: data.codeusertype,
                  compTp: company.comptp,
                }
                const loginTime = moment().format('YYYY-MM-DD HH:mm:ss')
                const logDateBucket = parseInt(moment().format('YYYY-MM-DD').split('-').join(''), 0)

                // START MONGODB
                const userLogValue = {
                  companyId: data.companyId,
                  userId: data.companyUserId,
                  loginTime,
                  logoutTime: null,
                  logDateBucket,
                }

                mongodb.userLog.create(userLogValue, (err, log) => {
                  if (err) {
                    console.log(err)
                    return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: 'Can\'t save log while login' })
                  }
                  console.log(log)
                })
                // END MONGODB

                return res.status(HTTP_STATUS.OK).json({
                  message: 'Successfully login',
                  profile,
                  session: {
                    isValid: true,
                    loggedAt: moment(),
                    token: getToken({ dataToken }),
                  },
                })
              })
          } else {
            res.status(HTTP_STATUS.BAD_REQUEST).json({ message: 'You are not registered as customer' })
          }
        }
      }
    }).catch((err) => {
      console.log(err)
      res.status(HTTP_STATUS.BAD_REQUEST).json({ message: 'Email is not registered. Check your input.' })
    })
}


// START EMAIL VALIDITY
async function emailValidity(req, res) {
  const { email } = req.body;
  // console.log('body', req.body);

  const user = await userService.getbyEmail(email)
  try {
    if (user) {
      res.status(HTTP_STATUS.OK).json({ validity: false })
    } else {
      // if not found set validity true
      res.status(HTTP_STATUS.OK).json({ validity: true })
    }
  } catch (err) {
    console.log('err', err)
    res.status(HTTP_STATUS.SERVER_ERROR).json({ message: `${HTTP_MESSAGE.SERVER_ERROR} ${err}` })
  }
}
// END EMAIL VALIDITY

async function register(req, res) {
  const {
    userPassword,
  } = req.body

  const created_at = moment().format('YYYY-MM-DD HH:mm:ss')

  await hashPassword(userPassword).then(async (hashedPassword) => {
    /*  do transaction create company, user and compdet
        when success send verification email
    */
    const verifcode = randomstring.generate(64)
    const data = req.body

    data.hashedPassword = hashedPassword
    data.verifcode = verifcode
    data.created_at = created_at

    const registerResult = await authService.register(data)

    try {
      const {
        userId,
        userEmail,
        userFullname,
        companyId,
        isSuccessful,
        companyAddress,
        userPhone,
        companyPhone,
        companyName,
      } = registerResult

      const response = {
        userId,
        userEmail,
        userFullname,
        companyId,
        isSuccessful,
      }

      const userInfo = {
        fullName: userFullname,
        companyName,
        userEmail,
        created_at,
        companyAddress,
        userPhone,
        companyPhone,
      }

      const sendEmailsToDev = [
        {
          email: 'anggiyasti@andalin.com',
          fullname: 'Anggiyasti',
        }, {
          email: 'dewi.yulianti@andalin.com',
          fullname: 'Dewi',
        },
      ]

      const sendEmailsToProd = [
        {
          email: 'utami.handoyo@andalin.com',
          fullname: 'Sales Andalin',
        }, {
          email: 'harold.purba@andalin.com',
          fullname: 'Sales Andalin',
        }, {
          email: 'alfan@andalin.com',
          fullname: 'Sales Andalin',
        }, {
          email: 'dessy.pratiwi@andalin.com',
          fullname: 'Sales Andalin',
        }, {
          email: 'adinda.pratiwi@andalin.com',
          fullname: 'Sales Andalin',
        }, {
          email: 'rifki@andalin.com',
          fullname: 'Sales Andalin',
        },
      ]

      const templateEmail = {
        recipient: {
          email: userEmail,
          fullName: userFullname,
          companyName,
        },
        body: {
          encryptedVerifcode: crypto.encrypt({
            companyId,
            userId,
            userEmail,
            verifcode,
          }),
        },
      }

      const sendEmailsTo = process.env.NODE_ENV === 'production' ? sendEmailsToProd : sendEmailsToDev

      _.map(sendEmailsTo, (el) => {
        const templateEmailGroup = {
          recipient: {
            email: el.email,
            fullName: el.fullname,
          },
          body: {
            userInfo,
          },
        }
        // mailer.sendNewSignupEmail(templateEmailGroup)
      })

      const templateEmailAdmin = {
        recipient: {
          email: 'admandalin@yahoo.com',
          fullName: 'Andalin',
        },
        body: {
          userInfo,
        },
      }
      // mailer.sendNewSignupEmail(templateEmailAdmin)

      // mailer.sendVerificationEmail(templateEmail)
      return res.status(HTTP_STATUS.OK).json(response)
    } catch (error) {
      console.log('error', error)
      return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: HTTP_MESSAGE.SERVER_ERROR });
    }
  }).catch((err) => {
    console.log(err);
    return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: HTTP_MESSAGE.SERVER_ERROR });
  });
}

/*  START VERIFY
    1. check decryptedVerifcode , if true find company
    2. if find company success update status verification and code user type in table c_user
*/

async function verify(req, res) {
  const { verifcode } = req.body
  const decryptedVerifcode = crypto.decrypt(verifcode)
  if (decryptedVerifcode) {
    const {
      userId, userEmail, companyId,
    } = decryptedVerifcode

    const userValue = {
      statverif: 1,
      codeusertype: 'USRA',
      status: 'USERVERIFICATION',
    }

    const userWhere = {
      id: userId,
      username: userEmail,
      email: userEmail,
    }

    const affectedRow = await userService.updateById(userValue, userWhere)

    try {
      if (affectedRow[0] > 0) {
        res.status(HTTP_STATUS.OK).json(userWhere)
      } else {
        res.status(HTTP_STATUS.BAD_REQUEST).json({ message: HTTP_MESSAGE.VERIFIED_TWICE })
      }
    } catch (err) {
      console.log(err)
      res.status(HTTP_STATUS.BAD_REQUEST).json({ message: HTTP_MESSAGE.BAD_REQUEST })
    }
  } else {
    res.status(HTTP_STATUS.BAD_REQUEST).json({ message: HTTP_MESSAGE.BAD_REQUEST })
  }
}
// END VERIFY

/*  START RESET PASSWORD MAIL
    find user, then send reset password email
    if failed return message bad request
*/
async function resetPasswordMail(req, res) {
  const { userEmail } = req.body
  const user = await userService.getbyUsername(userEmail)
  try {
    const templateEmail = {
      recipient: {
        email: userEmail,
        fullName: user.fullname,
      },
      body: {
        encryptedResetCode: crypto.encrypt({
          userId: user.id,
          userEmail,
          fullName: user.fullname,
        }),
      },
    }
    if (user.codeusertype.substring(0, 3) === 'USR') {
      // mailer.sendResetPasswordEmail(templateEmail)
    } else {
      return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: 'You are not registered as customer' })
    }
    res.status(HTTP_STATUS.OK).json({ message: 'Your link has been sent to your email' })
  } catch (err) {
    console.log(err)
    res.status(HTTP_STATUS.BAD_REQUEST).json({ message: 'Your email address is not valid' })
  }
}
// END RESET PASSWORD MAIL

/*  START RESET PASSWORD
    1. find user
    2. hash password
    3. update password
*/
async function resetPassword(req, res) {
  const { userPassword, resetcode } = req.body
  const decryptedResetCode = crypto.decrypt(resetcode)
  const user = await userService.getbyId(decryptedResetCode.userId)
  console.log(user)
  try {
    hashPassword(userPassword).then((hashedPassword) => {
      user.updateAttributes({
        id: user.id,
        password: hashedPassword,
      })
      res.status(HTTP_STATUS.OK).json({ message: 'Your password has been changed' })
    }).catch((err) => {
      console.log(err)
      res.status(HTTP_STATUS.SERVER_ERROR).json({ message: HTTP_MESSAGE.SERVER_ERROR })
    })
  } catch (err) {
    console.log(err)
    res.status(HTTP_STATUS.BAD_REQUEST).json({ message: HTTP_STATUS.BAD_REQUEST })
  }
}
// END RESET PASSWORD

// START REGISTER MAILER
async function resendEmail(req, res) {
  const {
    userEmail, companyName, userId, companyId, userFullname,
  } = req.body
  // find user then send verification email
  const user = await userService.getVerifcode(userFullname, userEmail, companyId, userId, USER_STATUS.unconfirmed_user)

  try {
    const templateEmail = {
      recipient: {
        email: userEmail,
        fullName: userFullname,
        companyName,
      },
      body: {
        encryptedVerifcode: crypto.encrypt({
          companyId,
          userId,
          userEmail,
          verifcode: user.verifcode,
        }),
      },
    }
    const response = {
      emailSent: true,
    }
    res.status(HTTP_STATUS.OK).json(response)
    // mailer.sendVerificationEmail(templateEmail)
  } catch (err) {
    console.log(err)
    res.status(HTTP_STATUS.SERVER_ERROR).json({ message: HTTP_MESSAGE.SERVER_ERROR })
  }
}
// END REGISTER MAILER

async function userLogout(req, res) {
  const { username } = req.body;
  const logout_at = moment().format('YYYY-MM-DD HH:mm:ss');
  const logDateBucket = parseInt(moment().format('YYYY-MM-DD').split('-').join(''), 0);

  const user = await userService.getbyUsername(username)
  try {
    // const userLogValue = {
    //   companyId: user.dataValues.id_company,
    //   userId: user.dataValues.id,
    //   logoutTime: logout_at,
    //   logDateBucket,
    //   logId: noSQL.uuid(),
    // }
    // new noSQL.instance.userLog(userLogValue).saveAsync().then(() => {
    //   console.log('berhasil')
    // })

    // START MONGODB
    const userLogValue = {
      companyId: user.dataValues.id_company,
      userId: user.dataValues.id,
      loginTime: null,
      logoutTime: logout_at,
      logDateBucket,
    }
    mongodb.userLog.create(userLogValue, (err, log) => {
      if (err) {
        console.log(err)
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: 'Can\'t save log while logout' })
      }
      console.log('berhasil', log)
    })
    // END MONGODB
    return res.status(HTTP_STATUS.OK).json('berhasil')
  } catch (err) {
    console.log(err);
    return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: HTTP_STATUS.BAD_REQUEST })
  }
}

function putInvitation(req, res) {
  const {
    fullname, gender, email, phone, job, userPassword, userPasswordConfirm, code,
  } = req.body
  const decryptedRegistrationCode = crypto.decrypt(code)
  hashPassword(userPassword).then((hashedPassword) => {
    let hashedPass = hashedPassword
    if (userPassword !== userPasswordConfirm) {
      hashedPass = undefined
      res.status(HTTP_STATUS.SERVER_ERROR).json({ message: 'Password does not match' })
    } else {
      const userValue = {
        password: hashedPass,
        fullname,
        gender,
        email,
        phone,
        job,
        id: decryptedRegistrationCode.userId,
        statverif: 1,
        compref: 'andalin',
        status: 'ANDALINVERIFICATION',
      }
      const queryAccount = {
        id_company: decryptedRegistrationCode.companyId,
        id: decryptedRegistrationCode.userId,
        username: decryptedRegistrationCode.userEmail,
      }
      console.log(userValue)
      settingService.putAccount(userValue, queryAccount).then(() => {
        const response = {
          fullname,
          gender,
          email,
          phone,
          job,
          password: hashedPassword,
        }
        res.status(HTTP_STATUS.OK).json(response)
      }).catch((err) => {
        console.log(err);
        res.status(HTTP_STATUS.SERVER_ERROR).json({
          message: HTTP_MESSAGE.SERVER_ERROR,
        })
      })
    }
  }).catch((err) => {
    console.log(err);
    res.status(HTTP_STATUS.SERVER_ERROR).json({
      message: HTTP_MESSAGE.SERVER_ERROR,
    })
  })
}

async function emailChecking(req, res) {
  const { userEmail } = req.body
  userService.getbyUsername(userEmail)
    .then((username) => {
      if (username) {
        res.status(HTTP_STATUS.OK).json({ message: `${userEmail} has been registered`, email: false })
      } else {
        res.status(HTTP_STATUS.OK).json({ message: `${userEmail} is available`, email: true })
      }
    })
}

export default {
  addUser,
  login,
  register,
  resendEmail,
  emailValidity,
  verify,
  resetPasswordMail,
  resetPassword,
  userLogout,
  putInvitation,
  emailChecking,
}
