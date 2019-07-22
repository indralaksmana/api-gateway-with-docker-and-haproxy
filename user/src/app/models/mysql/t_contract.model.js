'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_contract = sequelize.define('t_contract', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    contract_number: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true,
    },
    totalshipment: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    pickup_from: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true,
    },
    delivery_address_ori: {
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
    delivery_address_desti: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true,
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
    shipment_type: {
      type: DataTypes.DECIMAL(10, 0),
      allowNull: true,
    },
    incoterms: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    duration_start: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    duration_end: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    request_expired: {
      type: DataTypes.DATE,
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
    satuan: {
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
    temperature: {
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
    total_weight: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    total_quantity: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    container_size: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    product_class: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    option_estimate_storage: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
  }, {
    timestamps: false,
    collate: 'utf8_general_ci',
  })

  t_contract.associate = function (models) {
    // associations can be defined here
    t_contract.belongsTo(models.t_bidpricecontract, {
      foreignKey: 'id_contract',
      sourceKey: 'id',
    })

    t_contract.belongsTo(models.t_bidcontract, {
      foreignKey: 'id_contract',
      sourceKey: 'id',
    })

    t_contract.hasMany(models.c_top_contract, {
      foreignKey: 'id_contract',
      sourceKey: 'id',
    })
  }
  return t_contract
}
