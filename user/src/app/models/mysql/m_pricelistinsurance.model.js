'strict mode'

module.exports = (sequelize, DataType) => {
  const m_pricelistinsurance = sequelize.define('m_pricelistinsurance', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataType.BIGINT(11),
    },
    code: {
      type: DataType.STRING(32),
      allowNull: true,
    },
    id_vendor: {
      type: DataType.BIGINT(11),
      allowNull: true,
    },
    vendorcompname: {
      type: DataType.STRING(64),
      allowNull: true,
    },
    insurancepcg: {
      type: DataType.DECIMAL(19, 6),
      allowNull: true,
    },
    note: {
      type: DataType.TEXT,
      allowNull: true,
    },
    status: {
      type: DataType.BIGINT(11),
      allowNull: false,
    },
    updated_at: {
      type: DataType.DATE,
      allowNull: true,
    },
    created_at: {
      type: DataType.DATE,
      allowNull: false,
    },
    created_user: {
      type: DataType.BIGINT(11),
      allowNull: true,
    },
    modified_user: {
      type: DataType.BIGINT(11),
      allowNull: true,
    },
    insuranceminimum: {
      type: DataType.DECIMAL(19, 6),
      allowNull: true,
    },
    policycost: {
      type: DataType.DECIMAL(19, 6),
      allowNull: true,
    },
    dutycost: {
      type: DataType.DECIMAL(19, 6),
      allowNull: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true, // do not pluralizing tables name
    tableName: 'm_pricelistinsurance',
  });
  return m_pricelistinsurance
}
