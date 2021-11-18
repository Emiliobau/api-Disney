const path = require("path")

const swaggerSpect ={
  definition:{
    openapi:"3.0.0",
    info:{
      title: "Api-Disney node.js",
      version: "1.0.0"
    },
    servers:[
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis:[`${path.join(__dirname,"./routers/*.js")}`]


}

module.exports = swaggerSpect