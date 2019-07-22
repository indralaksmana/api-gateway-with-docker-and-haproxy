'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_shipment = sequelize.define('t_shipment', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    id_invoice: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      unique: true,
    },
    invoice_number: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: true,
    },
    invoice_duedate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_invoice_issued: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_invoice_paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    order_number: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: true,
    },
    order_stat: {
      type: DataTypes.STRING(8),
      allowNull: false,
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
    additional_request_stat: {
      type: DataTypes.BOOLEAN,
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
    freight_sum: {
      type: DataTypes.STRING(512),
      allowNull: false,
    },
    trucking_stat: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    document_stat: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    custom_stat: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    insurance_stat: {
      type: DataTypes.BOOLEAN,
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
    book_price_total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    book_price_currency_code: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    book_price_currency_rate: {
      type: DataTypes.FLOAT,
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
    carrier_name: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    carrier_bl_awb: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    carrier_contract: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    origin_country_code: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    origin_country: {
      type: DataTypes.STRING(64),
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
    compref: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },
    payment_stat: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    trx_id: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    incoterms: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    book_type: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    order_stat_note: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    testimonial_status: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    termofpayment: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    status_shipment: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    reference_number: {
      type: DataTypes.STRING(64),
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
    volume: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    satuan: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    custom_origin_stat: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    custom_destination_stat: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    commodities_type_additional: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    shipment: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    freight_sub_type: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    status: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      defaultValue: 1,
    },
  }, {
    timestamps: false,
  });
  t_shipment.associate = function (models) {
    // associations can be defined here
    t_shipment.hasMany(models.t_shipmentinvoice, { foreignKey: 'id_shipment', targetKey: 'id' })

    t_shipment.belongsTo(models.c_comp, {
      foreignKey: 'shipper_id_comp',
      sourceKey: 'id',
    });
  }
  return t_shipment
}
