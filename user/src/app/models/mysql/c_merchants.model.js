'strict mode'

module.exports = (sequelize, DataTypes) => {
  const c_merchants = sequelize.define('c_merchants', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
      defaultValue: 1,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    modified_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_user: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      defaultValue: 1,
    },
    modified_user: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      defaultValue: 1,
    },
    logo: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true, // do not pluralizing tables name
    tableName: 'c_merchants',
  });
  return c_merchants
}
