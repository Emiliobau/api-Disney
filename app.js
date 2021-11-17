const express = require ("express");
const methodOverride = require('method-override')
const routerUser = require("./src/routers/routerUser");
const routerCharacter = require ("./src/routers/routerCharacter");
const routerMovie = require ("./src/routers/routerMovie")
const dotenv = require ("dotenv")
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))



//rutas globales

app.use("/auth", routerUser);
app.use("/character", routerCharacter);
app.use("/movie", routerMovie);


app.listen(process.env.PORT || 3000, ()=>{
  console.log("Servidor funcionando en puerto", process.env.PORT  )
})