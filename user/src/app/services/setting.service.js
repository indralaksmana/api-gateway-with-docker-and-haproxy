'strict mode'

import { Promise } from 'bluebird'
import { c_comp, m_pricelistinsurance, c_user, c_compdet } from '../models/mysql'

class Setting {
  async findCompany(queryCompany) {
    return new Promise((resolve, reject) => c_comp.findOne({
      attributes:
      [
        ['compname', 'name'],
        ['compaddress', 'address'],
        ['compphone', 'phone'],
        ['companyheadquarter', 'country'],
        ['companyindustry', 'industry'],
        ['compfax', 'fax'],
        ['compemail', 'email'],
        ['compdescription', 'description'],
        ['comptp', 'type'],
        ['statreceiverfqlcl', 'receiverfqlcl'],
        ['statreceiverfqfcl', 'receiverfqfcl'],
        ['statreceiverfqaircourier', 'receiverfqaircourier'],
        ['statreceiverfqaircargo', 'receiverfqaircargo'],
        'nova',
        ['id', 'companyId'],
        'termofpayment',
      ],
      where: queryCompany,
    }).then(result => resolve(result),
      err => reject(err)))
  }

  async findPriceListInsurance(queryPriceListInsurance) {
    return new Promise((resolve, reject) => m_pricelistinsurance.findOne({
      attributes:
      [
        ['id_vendor', 'vendorId'],
        ['insurancepcg', 'insurancepcg'],
        ['insuranceminimum', 'insuranceMinimum'],
        ['policycost', 'policyCost'],
        ['dutycost', 'dutyCost'],
      ],
      where: queryPriceListInsurance,
    }).then(result => resolve(result),
      err => reject(err)))
  }

  async findDocument(queryDocument) {
    return new Promise((resolve, reject) => c_comp.findOne({
      attributes:
      [
        'attachnpwp',
        'attachsiup',
        'attachktp',
        'attachtdp',
        'attachpassport',
        'attachlicense',
        'attachnik',
        'attachnikexport',
        'attachnikimport',
        'attachadditional',
        'attachnib',
        'attachothers'
      ],
      where: queryDocument,
    }).then(result => resolve(result),
      err => reject(err)))
  }

  async findUser(queryUser) {
    return new Promise((resolve, reject) => c_user.findAll({
      attributes:
      [
        'id',
        'username',
        'codeusertype',
        'gender',
        'fullname',
        'statverif',
      ],
      where: queryUser,
    }).then(result => resolve(result),
      err => reject(err)))
  }

  async findAccount(queryAccount) {
    return new Promise((resolve, reject) => c_user.findOne({
      attributes:
      [
        'username',
        'email',
        'fullname',
        'codeusertype',
        'gender',
        'photo',
        'phone',
        'job',
      ],
      where: queryAccount,
    }).then(result => resolve(result),
      err => reject(err)))
  }

  async putCompany(data, queryCompany) {
    return new Promise((resolve, reject) => c_comp.update(
      data,
      {
        fields:
        [
          'compname',
          'compaddress',
          'compphone',
          'compemail',
          'companyheadquarter',
          'companyindustry',
          'compdescription',
          'compfax',
          'statreceiverfqlcl',
          'statreceiverfqfcl',
          'statreceiverfqaircourier',
          'statreceiverfqaircargo',
        ],
        where: queryCompany,
      },
    ).then(result => resolve(result),
      err => reject(err)))
  }

  async putUser(updatePromises) {
    return new Promise((resolve, reject) => c_user.update(
      updatePromises,
    ).then(result => resolve(result),
      err => reject(err)))
  }

  async putAccount(data, queryAccount) {
    return new Promise((resolve, reject) => c_user.update(
      data,
      {
        where: queryAccount,
      },
    ).then(result => resolve(result),
      err => reject(err)))
  }

  async createUser(data) {
    return new Promise((resolve, reject) => c_user.create(data)
      .then((result) => {
        resolve(result)
      }, (err) => {
        reject(err)
      }))
  }

  async createCompdet(data) {
    return new Promise((resolve, reject) => c_compdet.create(data)
      .then((result) => {
        resolve(result)
      }, (err) => {
        reject(err)
      }))
  }
}

export default new Setting()
