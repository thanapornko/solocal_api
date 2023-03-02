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
      underscored: true,
      timestamps: false
    }
  );

  Guide.associate = db => {
    Guide.belongsTo(db.Destination, {
      foreignKey: {
        name: "destinationId",
        allowNull: true
      },
      onDelete: "RESTRICT"
    });
    Guide.hasMany(db.Booking, {
      foreignKey: {
        name: "guideId",
        allowNull: false
      },
      onDelete: "RESTRICT"
    });
  };

  return Guide;
};
