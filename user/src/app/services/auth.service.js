'strict mode'

import bcrypt from 'bcryptjs'
import { Promise } from 'bluebird'
import { USER_STATUS } from '../../config/const'

import {
  sequelize, c_user, c_comp, c_compdet,
} from '../models/mysql'

class AuthService {
  async register(data) {
    const {
    // userinfo
      userEmail,
      userFullname,
      userSex,
      userPhone,
      userJob,
      userKnoweximku,
      compRef,
      // companyInfo
      companyReference,
      companyName,
      companyAddress,
      companyCountry,
      companyPhone,
      companyIndustry,
      // logistic info
      companyRouteDestinationCountry,
      companyRouteOriginCountry,
      airFreight,
      oceanFreight,
      landFreight,
      companyAnnualFCLShipment,
      // companyAnnualLCLShipment,
      companyAnnualNumberShipment,
      companyAnnualWeightShipment,
      companyProduct,
      hashedPassword,
      verifcode,
      created_at,
    } = data;
    return new Promise((resolve, reject) => {
      sequelize.transaction((t) => {
        const transportationmode = `${airFreight
          ? 'air'
          : ''} ${oceanFreight
          ? 'ocean'
          : ''} ${landFreight
          ? 'land'
          : ''}`
        const companyValue = {
          compref: companyReference,
          compname: companyName,
          compphone: companyPhone,
          compaddress: companyAddress,
          comptp: 'USER',
          companyheadquarter: companyCountry,
          companyindustry: companyIndustry,
          typeproduct: companyProduct,
          averageshipment: companyAnnualFCLShipment,
          shipmentnumber: companyAnnualNumberShipment,
          shipmentweight: companyAnnualWeightShipment,
          // shipmentweight: companyAnnualLCLShipment,
          transportationmode,
          origincountry: companyRouteOriginCountry,
          destinationcountry: companyRouteDestinationCountry,
          created_at,
          updated_at: created_at,
        }
        // create company, if success create user
        return c_comp.create(companyValue, { transaction: t }).then((company) => {
          const userValue = {
            username: userEmail,
            password: hashedPassword,
            email: userEmail,
            codeusertype: USER_STATUS.unconfirmed_user,
            id_company: company.id,
            verifcode,
            statverif: 0,
            fullname: userFullname,
            gender: userSex,
            phone: userPhone,
            job: userJob,
            knoweximku: userKnoweximku,
            codereferal: null,
            userrating: 0,
            status: 'OPEN',
            created_at,
            updated_at: created_at,
            compref: compRef,
            created_user: 1,
            modified_user: 1,
          }
          // create user, if success create compdet
          return c_user.create(userValue, { transaction: t }).then((user) => {
            const compdetValue = {
              id_user: user.id,
              id_company: company.id,
              status: 1,
              created_at,
              updated_at: created_at,
            }

            return c_compdet.create(compdetValue, { transaction: t })
          })
        })
      }).then((t_res) => {
        console.log('tres', t_res)
        const { id_user, id_company } = t_res;
        const response = {
          userId: id_user,
          userEmail,
          userFullname,
          companyId: id_company,
          isSuccessful: true,
          created_at,
          companyAddress,
          userPhone,
          companyPhone,
          companyName,
        }

        console.log('response', response)
        resolve(response)
      }).catch((errTrans) => {
        console.log('err', errTrans)
        reject(errTrans)
      })
    })
  }

  async login(data) {
    console.log(data)
    const { username, password } = data
    return c_user.findOne({
      where: {
        username,
        statususer: 1,
      },
      attributes: ['id', 'username', 'fullname', 'email', 'codeusertype', 'id_company', 'fullname', 'password', 'phone', 'status', 'statverif'],
    }).then(user => (bcrypt.compareSync(password, user.password)
      ? {
        username: user.username,
        fullname: user.fullname,
        email: user.email,
        companyId: user.id_company,
        companyUserId: user.id,
        companyUserUsername: user.username,
        codeusertype: user.codeusertype,
        phone: user.phone,
        status: user.status,
        statverif: user.statverif,
      } : false))
  }
}

export default new AuthService()
