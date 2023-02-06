module.exports = (sequelize, DataTypes) => {
  const Destination = sequelize.define(
    "Destination",
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
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      iternary: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      image1: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image2: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      underscored: true
    }
  );

  Destination.associate = db => {
    Destination.hasMany(db.Booking, {
      foreignKey: {
        name: "destinationId",
        allowNull: false
      },
      onDelete: "RESTRICT"
    });
    Destination.belongsTo(db.Guide, {
      foreignKey: {
        name: "guideId",
        allowNull: false
      },
      onDelete: "RESTRICT"
    });
  };

  return Destination;
};
