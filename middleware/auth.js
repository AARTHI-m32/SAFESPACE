const jwt = require('jsonwebtoken')

const auth = async(req,res,next) => {

   const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
  res.status(401).json({ message: "Authorization token missing or malformed" });

  }

  const token = authHeader.split(" ")[1];
  // const token = req.header("Authorization").split(" ")[1]
   if(!token)
    return res.status(404).json("Token Required")

   try{
    const decoded = jwt.verify(token,"secret_key")
    req.user = decoded
    next()
   }
   catch(error){
      console.log(error)
    return res.status(500).json("Invalid token")
   }
}

module.exports = auth