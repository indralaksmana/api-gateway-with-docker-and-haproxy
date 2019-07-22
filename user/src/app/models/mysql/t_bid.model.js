'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_bid = sequelize.define('t_bid', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    id_rfq: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
      unique: true,
    },
    id_merchant: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      unique: true,
    },
    estimatedaymin: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      unique: true,
    },
    estimatedaymax: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      unique: true,
    },
    minweight: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      unique: true,
    },
    maxweight: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      unique: true,
    },
    shippingline: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true,
    },
    validdate: {
      type: DataTypes.DATE,
      allowNull: true,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true,
    },
    bid: {
      type: DataTypes.DECIMAL(10, 0),
      allowNull: false,
      unique: true,
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    status_bid: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      defaultValue: 1,
    },
    status: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      defaultValue: 1,
    },
    attachment: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    file_ext: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
  }, {
    timestamps: false,
    collate: 'utf8_general_ci',
  });
  t_bid.associate = function (models) {
    // associations can be defined here
    t_bid.belongsTo(models.t_request_quotation, {
      foreignKey: 'id_rfq',
      sourceKey: 'id',
    });

    t_bid.belongsTo(models.c_comp, {
      foreignKey: 'id_merchant',
      sourceKey: 'id',
    });

    t_bid.hasMany(models.c_top_rfq, {
      foreignKey: 'id_company',
      sourceKey: 'id_merchant',
    });
  }
  return t_bid
}
