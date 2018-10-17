const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.post('/adduser', function(req,res){
    const user = new User({
        name:req.body.details.name,
        username:req.body.details.username,
        image:req.body.imagename
    })

    user.save(function(err,data){
        if(err){
            res.json({
                err:err,
                failuremessage:'Unable to create user'
            })
        }
        else{
            res.json({
                success:true,
                code:200,
                successmessage:'User create successfully'
            })
        }
    })
})

module.exports = router;