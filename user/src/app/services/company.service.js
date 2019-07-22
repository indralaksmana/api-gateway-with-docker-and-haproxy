'strict mode'

import { Promise } from 'bluebird'
import { c_comp, t_bid } from '../models/mysql'

class CompanyService {
  // create one
  createWithTransaction(companyValue, t) {
    return new Promise((resolve, reject) => c_comp.create(companyValue, { transaction: t })
      .then(result => resolve(result), err => reject(err)))
  }

  // read all
  getAllByVendor(vendorIds) {
    return new Promise((resolve, reject) => c_comp.findAll({
      where: { id: vendorIds },
      attributes: ['comprate', 'id'],
    }).then(result => resolve(result), err => reject(err)))
  }

  // get one
  getById(id) {
    return new Promise((resolve, reject) => c_comp.findOne({
      where: { id },
    }).then(result => resolve(result), err => reject(err)))
  }

  getCodeById(id) {
    return new Promise((resolve, reject) => c_comp.findOne({
      attributes: ['compcode'],
      where: {
        status: 1,
        id,
      },
    }).then(result => resolve(result), err => reject(err)))
  }

  getByRfqId(id_rfq) {
    return new Promise((resolve, reject) => c_comp.findOne({
      include: {
        model: t_bid,
        where: {
          id_rfq,
        },
      },
      attributes: ['compname'],
    }).then(result => resolve(result), err => reject(err)))
  }

  getAttachTypeById(companyId, documentType) {
    return new Promise((resolve, reject) => c_comp.findOne({
      attributes: [`attach${documentType}`],
      where: {
        id: companyId,
      },
    }).then(result => resolve(result), err => reject(err)))
  }
}

export default new CompanyService()
