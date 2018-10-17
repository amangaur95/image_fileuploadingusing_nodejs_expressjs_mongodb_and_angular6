const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.get('/getimage', function(req,res){
    User.find({})
    .exec(function(err,imagename){
        console.log(imagename,"from User.find");
        if(err){
            res.json({
                success:false,
                err:err,
                failuremessage:'Unable to found image'
            })
        }
        else{
            res.json({
                success:true,
                code:200,
                imagename:imagename
            })
        }
    })
})

module.exports = router;