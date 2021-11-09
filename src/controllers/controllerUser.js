
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
let db = require("../database/models")

const controller = {

  register:(req, res)=>{
    let email = req.body.email;

    db.User.findOne({ where: {email: email} })
      .then((user) => {
        if (user) {
          return res.status(404).json({ message: "el usuario ya existe" })
        }
        else{
          db.User.create({
            name: req.body.name,
            password:bcrypt.hashSync(req.body.password,5),
            email : req.body.email
          })
            .then(usuario=>{
              return res.status(200).json({
                data: usuario,
                status: 200,
                create: "ok"
              })
            })
              }
               })

    },

  login:(req, res) =>{
    let email = req.body.email;
    let password = req.body.password;
    let token

    db.User.findOne( { where: {email:email}})
      .then((userApi)=>{
        let user = userApi
        userPasword = user.password
        if(user){
          passwordOk = bcrypt.compareSync(password, user.password)
        }
        if (passwordOk) {
          token = jwt.sign({ id: user.id, email: user.email }, "alkemy", { expiresIn:"1d"} )
               return res.json({ message: "contraseña correcta", token})}
        else {
          return res.json({ message: "credenciales inavalidas" })}
      })

    }

}

module.exports = controller