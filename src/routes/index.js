const express = require('express')
const User = require('../models/Users')
const router = express.Router()

//Home Route
router.get('/api/v1/', async (req, res) => {
  try {
      return res.status(200).send('Home Route')
      
  } catch (error) {
      return res.status(500).json({"error":error})
  }
  
})

//Get all Users
router.get('/api/v1/users', async (req, res) => {
  try {
    const user = await User.find()
      return res.status(200).json(user)
      
  } catch (error) {
      return res.status(500).json({"error":error})
  }
  
}
)
//Register New User

router.post('/api/v1/user', async (req, res) => {
  try {
      const {
        user_name, 
        email, 
        first_name, 
        last_name,  
        phone} = req.body

      const user = await User.create({
        user_name, 
        email, 
        first_name, 
        last_name, 
        date_registered : Date.now(), 
        phone,
        status: "active",
        role: "user"
      })
      return res.status(201).json(user)
      
  } catch (error) {
      return res.status(500).json({"error":error})
  }
  
})

//Get one User
router.get('/api/v1/user/:id', async (req, res) => {
  try {
      const _id =req.params.id
      const user = await User.findById({_id})
      if(!user){
        return res.status(404).json("No such User Found")
      } else {
        return res.status(200).send(user)
      }
      
      
  } catch (error) {
      return res.status(500).json({"error":error})
  }
  
})

//Edit User
router.patch('/api/v1/user/:id', async(req, res)=>{
  try{
    const _id = req.params.id
    const user = await User.findByIdAndUpdate({_id})
    const {user_name, email, first_name, last_name, role,   phone, status} = req.body
    if (!user){
      await user.create({
        user_name,
        email, 
        first_name, 
        last_name,
        phone,
        status,
        role
      })
      return res.status(201).json(user)
    }
    else {
      user.user_name = user_name
      user.email= email
      user.first_name = first_name
      user.last_name= last_name 
      user.phone = phone,
      user.role = role,
      user.status = status
      await user.save()
      console.log(user)
      return res.status(201).json(user)
    }
  }
  catch(error){
    return res.status(500).json({'error': error})
  }
})

//Delete Single User

router.delete('/api/v1/user/:id', async (req, res)=>{
  try{
    const _id = req.params.id
    const user = await User.findByIdAndDelete(req.params.id)

    if(user.deletedCount === 0){
      return res.status(404).send('no such user found')
    }
    else{
      return res.status(204).send(user)
    }
  }
  catch(error){
    return res.status(500).send("there was an error", error)
  }
})

//Suspend user

router.put('/api/v1/suspend_user/:id', async(req, res)=>{
  try{
    const _user_name = req.params.user_name
    const user = await User.findOne({_user_name})
    const {active} = req.body
    if (!user){
      await user.create({
        user_name,
        email, 
        first_name, 
        last_name,
        phone,
        active: true,
        role, 
        date_registered: Date.now()
      })
      return res.status(201).json(user)
    }
    else {
      user.active = active
      await user.save()
      console.log(user)
      return res.status(201).json(user)
    }
  }
  catch(error){
    return res.status(500).json({'error': error})
  }
})

module.exports = router