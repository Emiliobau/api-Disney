
let db = require("../database/models")
const {Op} = require("sequelize")



const controller ={
  create:(req, res)=>{
   let name = req.body.name

    db.Character.findOne({ where: { name: name } })
      .then((character)=>{
        if(character){
          return res.status(404).json({ message: "el personaje que intentas crear ya existe" })
        }
        else{
          db.Character.create({
            name : req.body.name,
            image : req.body.image,
            age : req.body.age,
            weigtht : req.body.weigtht,
            history : req.body.history
          })
            .then(personaje => {
              return res.status(200).json({
                data: personaje,
                status: 200,
                create: "ok"
              })
            })
        }

      })
  },

  update:(req, res) =>{
    let id = req.params.id

    db.Character.findOne({ where: { id: id } })
      .then((character) => {
        if (character) {
          db.Character.update({
            name: req.body.name,
            image: req.body.image,
            age: req.body.age,
            weigtht: req.body.weigtht,
            history: req.body.history
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
          return res.status(404).json({ message: "el personaje que intentas editar no existe" })
        }
      })
  },

  delete:(req, res)=>{
    let id = req.params.id
    db.Character.findOne({ where: { id: id } })
      .then((character) => {
        if (character) {
          db.Character.destroy({ where : { id: id } })
            .then((result)=>{
           return  res.json({message : "el personaje seleccionado se borro correctamente"})
    })
  }
        else{ return res.json({ message: "el personaje seleccionado no existe"})}
})
},

list:(req, res) =>{

  let buscador  = req.query
  console.log(buscador)
  let name = buscador.name
  let age = buscador.age
  let idMovies= buscador.movies
  console.log(name,age,idMovies)


  if( name == undefined && age == undefined && idMovies == undefined ){
   db.Character.findAll()
      .then((charactersApi)=>{
          let characters = charactersApi.map( charact => {
            return {
              name : charact.name,
              image: charact.image
            }
          })
          return res.json( characters)
      })
    }
    else{
    db.Character.findAll({
      include: [{ association: "Movie" }],
           where: {
             [Op.or]:[
               {name : {[Op.eq]:name }},
               {age : {[Op.eq]:age}},
               { id: { [Op.eq]:idMovies}}
               
             ]
           }
         })
          .then((character)=>{
            return res.json(character)
          })


    }
},

  detail: (req, res) => {
    let id = req.params.id
    db.Movie.findAll({ include: [{ association: "Character", where: { id: id } }] })
      .then((respuestaApi) => {
        let character_movie = {
          character: respuestaApi[0].Character,
          movie: respuestaApi[0].title

        }
        return res.json(character_movie)
      })




  // let id = req.params.id
  // db.Character.findAll({ include: [{ association: "Movie" }] }, { where: { id: id } } )
  //   .then((characterApi)=>{
  //     return res.json(characterApi)
  //   })

}


}

module.exports = controller