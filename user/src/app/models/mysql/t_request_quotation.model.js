'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_request_quotation = sequelize.define('t_request_quotation', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    rfqnumber: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true,
    },
    pickup_from: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true,
    },
    country_from: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true,
    },
    city_from: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    deliver_to: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    country_to: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    city_to: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    countryf: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true,
    },
    cityf: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true,
    },
    countryt: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true,
    },
    cityt: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true,
    },
    cargo_readynes_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    option_insurance: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    option_dangerous_goods: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    option_customs_clearance: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    request_rate: {
      type: DataTypes.BIGINT(50),
      allowNull: true,
    },
    request_rate_to: {
      type: DataTypes.DECIMAL(10, 0),
      allowNull: true,
    },
    request_expired: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    shipment_type: {
      type: DataTypes.DECIMAL(10, 0),
      allowNull: true,
    },
    incoterms: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    product_type: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    hs_code: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 0),
      allowNull: true,
    },
    note_for_merchant: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    estimateddimension: {
      type: DataTypes.BIGINT(55),
      allowNull: true,
    },
    estimatedweight: {
      type: DataTypes.BIGINT(55),
      allowNull: true,
    },
    estimatedqty: {
      type: DataTypes.BIGINT(55),
      allowNull: true,
    },
    customer_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    customer_email: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    customer_phone: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    customer_company_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    customer_company_address: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    payment_references: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    service_head: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    optiontp: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    service_sub_type: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    created_by: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    satuan: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    temperature: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    pickup_address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    delivery_address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    product_type_additional: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    option_customs_clearance_destination: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    rfq_status: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    container_size: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    product_class: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    option_estimate_storage: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
  }, {})

  t_request_quotation.associate = function (models) {
    // associations can be defined here
    t_request_quotation.hasMany(models.t_bid, {
      foreignKey: 'id_rfq',
      sourceKey: 'id',
    })

    t_request_quotation.hasMany(models.m_statusbid, {
      foreignKey: 'id_rfq',
      sourceKey: 'id',
    })
  }
  return t_request_quotation
}
