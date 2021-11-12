module.exports = (sequelize, DataTypes) =>{
  let alias = "Genre"

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(45),
      allowNull: false
    }

  };
  let config = {
    tableName: "genres",
    timestamps: false
  }

  const Genre = sequelize.define(alias, cols, config)

  Genre.associate = function(modelos){
    Genre.hasMany(modelos.Movie,{
      as: "Movie",
      foreignKey: "genre_id"
    })
  }

  return Genre

}