
const jwt = require('jsonwebtoken')

const isAuthenticated = (req, res, next)=>{
  if (!req.headers["authorization"]){
    return res.status(403).json({ code: "Failed", message: " Access denied, you must load token "})
  }
  let accessToken = req.headers["authorization"]

  jwt.verify(accessToken, "alkemy", (err, user)=>{
    if(err){
      return res.json("token expired or incorrect")
    }
    else{next()}
  })


}

module.exports = isAuthenticated