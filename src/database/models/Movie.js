module.exports=(sequelize, DataTypes)=>{
  let alias = "Movie"
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    image:{
      type: DataTypes.STRING(45)
    },
    create_date:{
      type: DataTypes.DATE,
      allowNull: false
    },
    rating:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    genre_id:{
      type: DataTypes.INTEGER
    }
  };

  let config = {
    tableName: "movies",
    timestamps: false
  }

  const Movie = sequelize.define(alias, cols, config)

  Movie.associate = function(modelos){

    Movie.belongsTo(modelos.Genre,{
      as:"Genre",
      foreignKey: "genre_id"
    })

    Movie.belongsToMany(modelos.Character,{
      as: "Character",
      through: "movies_has_characters",
      foreignKey:"movies_id",
      otherKey: "characters_id",
      timestamps: false
    })
  }

  return Movie



}