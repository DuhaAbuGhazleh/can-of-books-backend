'use strict';

const userModel = require('../models/userSchema');

///query data from spacific collection (Book) we have to use model itself///////

let bookController= (req,res)=>{
    /////git all the data/////
    userModel.find().then(data=>{
        res.json(data);
    })  
}



let getbookController=(req,res)=>{
    let idBook=req.query.id;
    userModel.findOne({_id:idBook}).then(user=>{
        if(!user){
            res.send("the book collection is empty.")
        }
        else{
            res.json(data);
        }
    })

}


module.exports = {bookController,getbookController} 
