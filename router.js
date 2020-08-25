const express = require('express');
const { getUsersInRoom } = require('./users');
const router = express.Router();

router.get('/', ( req, res ) =>{
    res.json({msg: 'server is up and running'})
}  )

router.post('/user', (req, res)=>{
    let getuser;
   const username = req.body.name
   const room = req.body.room;
   const  users = getUsersInRoom(room);
   console.log('users', users)
   const index =  users.findIndex(user=> user.name === username)
   if(index !== -1) return res.status(200).json({error: 'user already exist with this name! Please try another name'})
   else return res.json(users[index]) 
})

module.exports = router