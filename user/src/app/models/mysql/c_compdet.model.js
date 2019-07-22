'strict mode'

module.exports = (sequelize, DataTypes) => {
  const c_compdet = sequelize.define('c_compdet', {
    id_user: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    id_company: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    note: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    status: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_at: {
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
  }, {});
  c_compdet.associate = function (models) {
    // associations can be defined here
    // CompDet.hasMany(models.c_user, {
    //   foreignKey: 'id_company',
    //   sourceKey: 'id',
    // });
  }
  return c_compdet
}
