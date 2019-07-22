'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_shipmentpayment = sequelize.define('t_shipmentpayment', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    id_invoice: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    id_shipment: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    order_number: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    method: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    andalin_bank_name: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    andalin_bank_account_name: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    andalin_bank_account_number: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    shipper_bank_name: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    shipper_bank_account_name: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    shipper_bank_account_number: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    payment_reference_number: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    payment_total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    payment_currency_code: {
      type: DataTypes.STRING(),
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
    created_by_comptp: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    created_by_id_user: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    created_by_id_comp: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    status: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
  }, {
    timestamps: false,
  });
  t_shipmentpayment.associate = function (models) {
    // associations can be defined here
  }
  return t_shipmentpayment
}
