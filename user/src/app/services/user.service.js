'strict mode'

// import * as Promise from 'bluebird'
import { Promise } from 'bluebird'
import { Op } from 'sequelize'
import {
  c_user, c_comp, c_compdet, sequelize,
} from '../models/mysql'

class UserService {
  // create one
  createCompany(data) {
    return new Promise((resolve, reject) => c_comp.create(data)
      .then(result => resolve(result), err => reject(err)))
  }

  createCompdet(data) {
    return new Promise((resolve, reject) => c_compdet.create(data)
      .then(result => resolve(result), err => reject(err)))
  }

  createCompdetWithTransc(compdetValue, t) {
    return new Promise((resolve, reject) => c_compdet.create(compdetValue, { transaction: t })
      .then(result => resolve(result), err => reject(err)))
  }

  createUser(data) {
    return new Promise((resolve, reject) => c_user.create(data)
      .then(result => resolve(result), err => reject(err)))
  }

  createWithTransaction(userValue, t) {
    return new Promise((resolve, reject) => c_user.create(userValue, { transaction: t })
      .then(result => resolve(result), err => reject(err)))
  }

  // read one
  getbyId(id) {
    return new Promise((resolve, reject) => c_user.findOne({
      where: { id },
    }).then(result => resolve(result), err => reject(err)))
  }

  // read one
  getUser(queryUser) {
    return new Promise((resolve, reject) => c_user.findOne({
      where: queryUser,
    }).then(result => resolve(result), err => reject(err)))
  }

  getbyEmail(userEmail) {
    return new Promise((resolve, reject) => c_user.findOne({
      where: {
        email: userEmail,
        statususer: 1,
      },
    }).then(result => resolve(result), err => reject(err)))
  }

  getbyUsername(username) {
    return new Promise((resolve, reject) => c_user.findOne({
      where: 
      { 
        username,
        statususer: 1,
      },
    }).then(result => resolve(result), err => reject(err)))
  }

  getVerifcode(userFullname, userEmail, companyId, userId, unconfirmed_user) {
    return new Promise((resolve, reject) => c_user.findOne({
      attributes: ['verifcode'],
      where: {
        fullname: userFullname,
        email: userEmail,
        id_company: companyId,
        id: userId,
        codeusertype: unconfirmed_user,
      },
    }).then(result => resolve(result), err => reject(err)))
  }

  getUserInfo() {
    return new Promise((resolve, reject) => c_user.findAll({
      include: [{
        model: c_comp,
        required: true,
        attributes: [[sequelize.col('id'), 'companyId']],
        where: {
          [Op.or]: [
            sequelize.where(sequelize.col('statreceiverfqaircargo'), 1),
            sequelize.where(sequelize.col('statreceiverfqlcl'), 1),
            sequelize.where(sequelize.col('statreceiverfqaircourier'), 1),
            sequelize.where(sequelize.col('statreceiverfqfcl'), 1),
          ],
        },
      }],
      attributes: ['codeusertype', 'email'],
      where: {
        statverif: 1,
        statususer: 1,
      },
    }).then(result => resolve(result), err => reject(err)))
  }

  getUserPhoto(companyUserId, companyId, companyUserUsername) {
    return new Promise((resolve, reject) => c_user.find({
      attributes: ['photo'],
      where: {
        id: companyUserId,
        id_company: companyId,
        username: companyUserUsername,
      },
    }).then(result => resolve(result), err => reject(err)))
  }

  getAndalinVerifByCompany(id_company) {
    return new Promise((resolve, reject) => c_user.findOne({
      where: {
        id_company,
        statususer: 1,
        status: 'ANDALINVERIFICATION',
      },
      attributes: ['email', 'fullname'],
    }).then(result => resolve(result), err => reject(err)))
  }

  // read all
  getAll() {
    return new Promise((resolve, reject) => c_user.findAll({
    }).then(result => resolve(result), err => reject(err)))
  }

  getAllByVendor(vendorIds) {
    return new Promise((resolve, reject) => c_user.findAll({
      where: {
        id_company: vendorIds,
        codeusertype: 'VDRA',
      },
      attributes: ['photo', ['id_company', 'id']],
    }).then(result => resolve(result), err => reject(err)))
  }

  getAllByCompany(userValues) {
    const { companyId, vendor_id } = userValues
    return new Promise((resolve, reject) => c_user.findAll({
      where: {
        id_company: [companyId, vendor_id],
        statususer: 1,
        statverif: 1,
      },
    }).then(result => resolve(result), err => reject(err)))
  }

  getAllAndalinVerification(arrId) {
    return new Promise((resolve, reject) => c_user.findAll({
      where: {
        id: {
          $in: arrId,
        },
        statususer: 1,
        status: 'ANDALINVERIFICATION',
      },
    }).then(result => resolve(result), err => reject(err)))
  }

  getVendorAndalinVerification(id_company) {
    return new Promise((resolve, reject) => c_user.findAll({
      where: {
        id_company,
        statususer: 1,
        status: 'ANDALINVERIFICATION',
        codeusertype: ['VDRA', 'VDRS'],
      },
    }).then(result => resolve(result), err => reject(err)))
  }

  // update by user id
  updateById(userValue, userWhere) {
    // const {
    //   id, id_company, username, email, verifcode,
    // } = userWhere

    return new Promise((resolve, reject) => c_user.update(userValue, {
      where: userWhere,
    }).then(result => resolve(result), err => reject(err)))
  }

  // delete by user id
  deleteById(data) {
    return new Promise((resolve, reject) => {

    })
  }
}

export default new UserService()
