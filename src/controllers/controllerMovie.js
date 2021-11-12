

let db = require("../database/models")

const controller = {

  create: (req, res)=>{
    let title = req.body.title

    db.Movie.findOne({ where: { title: title } })
      .then((movieApi)=>{
        if(movieApi){
          return res.status(404).json({ message: "la pelicula que intentas crear ya existe" })
        }
        else{
          db.Movie.create({
            title : req.body.title,
            image : req.body.image,
            create_date : req.body.create_date,
            rating : req.body.rating,
            genre_id : req.body.genre_id
          })
            .then(pelicula => {
              return res.status(200).json({
                data: pelicula,
                status: 200,
                create: "ok"
              })
            })
        }

      })

  },

  update:(req, res) =>{
    let id = req.params.id

    db.Movie.findOne({ where: { id: id } })
      .then((movie) => {
        if (movie) {
          db.Movie.update({
            title: req.body.title,
            image: req.body.image,
            create_date : req.body.create_date,
            rating : req.body.rating,
            genre_id : req.body.genre_id
          },
            {
              where: { id: id }
            }
          )
              return res.status(200).json({
                status: 200,
                update: " la edicion se realizo correctamente"
              })
        }
        else{
          return res.status(404).json({ message: "la pelicula que intentas editar no existe" })
        }
      })
  },

delete:(req, res)=>{
    let id = req.params.id
    db.Movie.findOne({ where: { id: id } })
      .then((movie) => {
        if (movie) {
          db.Movie.destroy({ where : { id: id } })
            .then((result)=>{
           return  res.json({message : "la pelicula seleccionada se elimino correctamente"})
    })
  }
        else{ return res.json({ message: "la pelicula seleccionada no existe"})}
})
},

list:(req, res) =>{

   db.Movie.findAll()
      .then((movieApi)=>{
          let movies = movieApi.map( mov => {
            return {
              title : mov.title,
              image: mov.image,
              create_date : mov.create_date
            }
          })
          return res.json( movies)
      })
},

  detail: (req, res) => {
    let id = req.params.id
       db.Character.findAll({ include:[{association: "Movie", where: { id: id } }]})
        .then((respuestaApi)=>{
           let movie_character = {
            movie : respuestaApi[0].Movie,
            character: respuestaApi[0].name

          }
          return res.json(movie_character)
        })


  }



}

module.exports = controller