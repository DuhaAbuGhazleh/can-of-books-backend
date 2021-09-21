"use strict";
//lab11//
const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const axios = require('axios');

require("dotenv").config();
app.use(cors());
const PORT =process.env.PORT;
const MONGO_URL=process.env.MONGO_URL;
const { seedUser}=require('./models/userSchema');
const {  bookController,createBookController,deleteBookController,updateBookController,}=require('./controller/book.controller');


app.use(express.json());  ///===> Give us the ability to request the (POST)(DELET)and deal with them 


///we give it from mongoose documintation/connections/////////
//mongoose.connect('mongodb://localhost:27017/myapp');
///we take the inside cutation and but it in the .env file///////////

///Connect the Backend with MongoDB ///
/// We will go to terminal and typy (use Book ) to create BD  after that we will provide it in the connect////


mongoose.connect(`${MONGO_URL}`,{useNewUrlParser: true, useUnifiedTopology: true});////WE should put this object in the connection {useNewUrlParser: true, useUnifiedTopology: true}

app.get('/',(req,res)=>{

    res.status(200).send("Can of Book");
});

app.get("/app",(req,res)=>{
    //seedUser()
    res.json(seedUser())
})

app.get('/book-get',bookController);
app.post('/create-book',createBookController);
app.delete('/delete-book/:id',deleteBookController);
 app.put('/update-book/:id',updateBookController);

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
})