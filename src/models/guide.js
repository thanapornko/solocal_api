module.exports = (sequelize, DataTypes) => {
  const Guide = sequelize.define(
    "Guide",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      profileImage: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      underscored: true
    }
  );

  Guide.associate = db => {
    Guide.hasOne(db.Destination, {
      foreignKey: {
        name: "guideId",
        allowNull: false
      },
      onDelete: "RESTRICT"
    });
  };

  return Guide;
};
