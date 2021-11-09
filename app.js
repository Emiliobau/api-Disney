const express = require ("express");
const routerUser = require("./src/routers/routerUser");
const routerCharacter = require ("./src/routers/routerCharacter");
const routerMovie = require ("./src/routers/routerMovie")

const app = express()

app.use(express.json())



//rutas globales

app.use("/auth", routerUser);
app.use("/character", routerCharacter);
app.use("/movie", routerMovie);


app.listen(process.env.PORT || 3000, ()=>{
  console.log("Servidor funcionando en puerto 3000")
})