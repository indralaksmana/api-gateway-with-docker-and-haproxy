'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_bidprice = sequelize.define('t_bidprice', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    id_bid: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    code_group_price: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },
    code_price: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },
    bid_price: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    note: {
      type: DataTypes.STRING(8),
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
    created_by: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    updated_by: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    id_rfq: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    id_vendor: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    vendor_comp: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    formula: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
  }, {
    timestamps: false,
    collate: 'utf8_general_ci',
  });
  t_bidprice.associate = function (models) {
    // associations can be defined here
    t_bidprice.belongsTo(models.t_request_quotation, {
      foreignKey: 'id_rfq',
      sourceKey: 'id',
    });

    t_bidprice.belongsTo(models.m_groupprice, {
      foreignKey: 'code_group_price',
      sourceKey: 'code',
    });

    t_bidprice.belongsTo(models.m_price, {
      foreignKey: 'code_price',
      sourceKey: 'code',
    });
  }
  return t_bidprice
}
