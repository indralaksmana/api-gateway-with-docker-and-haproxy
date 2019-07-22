'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_bidpricecontract = sequelize.define('t_bidpricecontract', {
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
    note_price: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    formula: {
      type: DataTypes.STRING(12),
      allowNull: true,
      unique: true,
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
    id_contract: {
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
  }, {
    timestamps: false,
    collate: 'utf8_general_ci',
  });
  t_bidpricecontract.associate = function (models) {
    // associations can be defined here
    t_bidpricecontract.hasMany(models.t_contract, {
      foreignKey: 'id_contract',
      sourceKey: 'id',
    });

    t_bidpricecontract.hasOne(models.m_groupprice, {
      foreignKey: 'code',
      sourceKey: 'code_group_price',
    });

    t_bidpricecontract.hasOne(models.m_price, {
      foreignKey: 'code',
      sourceKey: 'code_price',
    });
  }
  return t_bidpricecontract
}
