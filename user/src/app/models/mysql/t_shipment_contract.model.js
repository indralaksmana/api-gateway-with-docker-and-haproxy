'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_shipment_contract = sequelize.define('t_shipment_contract', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    shipper_id_comp: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    shipper_id_user: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    shipper_comp: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    shipper_name: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    shipper_address: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    shipper_phone: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    shipper_email: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    shipper_fax: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    shipper_notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    commodities_class: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    commodities_type: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    commodities_hscode: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    commodities_product: {
      type: DataTypes.STRING(2048),
      allowNull: false,
    },
    consignee_comp: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    consignee_name: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    consignee_address: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    consignee_phone: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    consignee_fax: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    consignee_email: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    transittime_min: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    freight_mode: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    freight_direct: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    freight_type: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    price_total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    price_currency_code: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    vendor_id: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    vendor_name: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    shipment_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    origin_country: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    origin_country_code: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    origin_city_code: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    origin_city: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    pol: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    destination_country_code: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    destination_country: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    destination_city_code: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    destination_city: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    pod: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    valid_until: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    transittime_max: {
      type: DataTypes.STRING(4),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    value_of_goods: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    payment_stat: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    book_type: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    termofpayment: {
      type: DataTypes.BIGINT(11),
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
    id_contract: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    contract_number: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    satuan: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
  }, {
    timestamps: false,
  });
  t_shipment_contract.associate = function (models) {
    // associations can be defined here
  }
  return t_shipment_contract
}
