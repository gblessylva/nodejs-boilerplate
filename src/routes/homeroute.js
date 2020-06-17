const express = require('express')
const router = express.Router()

const about =()=>{
  return(
    router.get('/api/v1/', async (req, res, next) => {
      try {
          return res.status(200).send('Home Route Now in home')
          
      } catch (error) {
          return res.status(500).json({"error":error})
      }
      
    }) 
  )
}

module.exports = about