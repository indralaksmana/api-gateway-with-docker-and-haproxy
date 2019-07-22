'strict mode'

module.exports = (sequelize, DataTypes) => {
  const c_comp = sequelize.define('c_comp', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    compref: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    compname: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    compphone: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    compfax: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    compemail: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    compaddress: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    compaddressbilling: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    compdescription: {
      type: DataTypes.STRING(2048),
      allowNull: true,
    },
    comprate: {
      type: DataTypes.DECIMAL(19, 6),
      allowNull: true,
    },
    comptp: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    attachnpwp: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    statnpwp: {
      type: DataTypes.BIGINT(64),
      allowNull: true,
    },
    attachsiup: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    statsiup: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    attachktp: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    statktp: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    attachtdp: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    stattdp: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    attachpassport: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    statpassport: {
      type: DataTypes.BIGINT(11),
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
    topayment: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    attachlicense: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    attachnikexport: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    attachnikimport: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    attachnib: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    attachothers: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    origincountry: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    destinationcountry: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    transportationmode: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    averageshipment: {
      type: DataTypes.STRING(10),
    },
    companyheadquarter: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    companyindustry: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    typeproduct: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    shipmentweight: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    document_upload: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    shipmentnumber: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    statreceiverfqfcl: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    statreceiverfqlcl: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    statreceiverfqaircargo: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    statreceiverfqaircourier: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    statreceiverfq: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    compcode: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    nova: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    termofpayment: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
  }, {});
  c_comp.associate = function (models) {
    // associations can be defined here
    c_comp.hasMany(models.c_user, {
      foreignKey: 'id_company',
      sourceKey: 'id',
    });

    c_comp.belongsTo(models.t_bidcontract, {
      foreignKey: 'id',
      sourceKey: 'id_merchant',
    });

    c_comp.hasMany(models.t_bid, {
      foreignKey: 'id_merchant',
      sourceKey: 'id',
    });

  }
  return c_comp
}
