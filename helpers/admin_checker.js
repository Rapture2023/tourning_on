const User = require('../models/userModel')


const admin_checker = async (req, res, next) => {
    // verify user is authenticated for adminship
    const { authorization } = req.headers
  
    if (!authorization) {
      return res.status(401).json({error: 'Request is not authorized, only accessed by admin!'})
    }
  
    const id = authorization.split(' ')[1]
  
    try {
    
      req.user = await User.findById(id);
      console.log(req.user)
      if(req.user.role == 'admin'){
          next()
      }
  
      else{
          res.status(401).json('Request is not authorized, only accessed by admin!')
      }
      
  
    } catch (error) {
      console.log(error)
      res.status(401).json({error: 'Request is not authorized'})
    }
  }
  
  module.exports = admin_checker