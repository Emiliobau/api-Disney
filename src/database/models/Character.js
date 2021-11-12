module.exports = (sequelize, DataTypes) =>{
  let alias = "Character"
  let cols = {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name:{
      type: DataTypes.STRING(45),
      allowNull: false
    },
    image:{
      type: DataTypes.STRING(45)
    },
    age:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weigtht: {
      type: DataTypes.INTEGER
    },
    history:{
      type: DataTypes.TEXT
    }

  };

  let config = {
    tableName: "characters",
    timestamps: false
  }

  const Character = sequelize.define(alias, cols, config)

  Character.associate = function (modelos) {

    Character.belongsToMany(modelos.Movie, {
      as: "Movie",
      through: "movies_has_characters",
      foreignKey: "characters_id",
      otherKey: "movies_id",
      timestamps: false
    })
  }

  return Character
}