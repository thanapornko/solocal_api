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
      // price: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   validate: {
      //     notEmpty: true
      //   }
      // },
      activity: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      image1: {
        type: DataTypes.STRING,
        allowNull: true
      },
      image2: {
        type: DataTypes.STRING,
        allowNull: true
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
