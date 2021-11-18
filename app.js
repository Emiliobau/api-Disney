const express = require ("express");
const methodOverride = require('method-override')
const routerUser = require("./src/routers/routerUser");
const routerCharacter = require ("./src/routers/routerCharacter");
const routerMovie = require ("./src/routers/routerMovie")
const dotenv = require ("dotenv")
dotenv.config()
const cors = require("cors")

//Swagger
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require ("swagger-jsdoc")
const swaggerSpect = require("./src/swaggerSpect")


const app = express()

app.use(cors())
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpect))) // swaggerSpect son las especificaciones
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