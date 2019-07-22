'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_shipmentinvoice = sequelize.define('t_shipmentinvoice', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    id_shipment: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    order_number: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    invoice_number: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    currency_rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    currency_from_code: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    ppn: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    total_gross: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    total_ppn: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    total_grand: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    is_pid: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    is_valid: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING(),
      allowNull: true,
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
  }, []);
  t_shipmentinvoice.associate = function (models) {
    // associations can be defined here
    t_shipmentinvoice.hasMany(models.t_shipmentprice, { foreignKey: 'id_invoice', targetKey: 'id' }) 
  }
  return t_shipmentinvoice
}
