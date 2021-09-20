'use strict';

const {userModel,seedUser} = require('../models/userSchema');
const {bookModel}=require('../models/bookSchema.model')
///query data from spacific collection (Book) we have to use model itself///////
///////////lab 11 GIT /////////
//===========================//
let bookController= (req,res)=>{
    /////git all the data/////
    userModel.find().then(data=>{
        res.json(data);
    })  
}



// let onebookController=(req,res)=>{
//     let idBook=req.query.id;
//     userModel.findOne({_id:idBook}).then(data=>{
//         if(!data){
//             res.send("the book collection is empty.")
//         }
//         else{
//             res.json(data);
//         }
//     })

// }

////////// lab 12 POST /////////////
//=============First Way POST================

const createBookController=async (req,res)=>{
    let {email, title, description, status}=req.body;
    let newUser=bookModel(useremail);
    newUser.save();
    let newBook=new userModel({email:email, title:title, description:description, status:status})
    newBook.save()
    let Listofbook=await userModel.find({});
    res.status(201).json(Listofbook);
    
}
//===============  DELET  =======================
const deleteBookController=  (req,res)=>{
    let id=req.params.id;
    userModel.findByIdAndDelete(id,async (err,data)=>{
        if(err){
            res.status(500).send("an error occured");
        }
        let Listofbook= await userModel.find({});
        res.json(Listofbook);
           
    })
}

module.exports = {bookController,createBookController,deleteBookController} 

  //============Another Way POST=================================

// const createBookController = async (req, res) => {
//     const {email, title, description, status } = req.body;
//     userModel.findOne({ email: email }, (error, userData) => {
//         if (error) {
//             res.send(error);
//         }
//         else {
//             console.log(userData)
//             userData.bookSchema.push({  
  //             title: title,
  //             description: description,
 //               status:status 
 //           });
//             userData.save();
//             res.json(userData.bookSchema);
//         }
//     })
//   };

  
  //============Another Way DELET=================================


