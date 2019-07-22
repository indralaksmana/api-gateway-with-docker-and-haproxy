'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_andalinbankacc = sequelize.define('t_andalinbankacc', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    bank: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    branch: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });
  t_andalinbankacc.associate = function (models) {
    // associations can be defined here
  }
  return t_andalinbankacc
}
