'use strict';

const mongoose = require('mongoose');

const bookSchema = require('../models/bookSchema.model');

///creat eschema///

//we use schema to define how our data look like //
//Build a Mongoose 'Book' schema with valid keys for `title`, `description`, `status`, and `email`


const userSchema = new mongoose.Schema({

    email: String,
    books: [bookSchema]
});


/////create model/////

const userModel = mongoose.model('bookUser', userSchema);

let seedUser = () => {
    let booksList=[
    {
        title:'The First Days',
        description:'It looks like the end of the world. But Katie and Jenni and many others will do whatever they have to to stay alive. Run, fight, pick each other up when they stumble, fall in love…anything is possible at the end of the world.',
        status:'Used',
    },
    {
        title:'The Kite Runner',
        description:'A sweeping story of family, love, and friendship told against the devastating backdrop of the history of Afghanistan over the last thirty years, The Kite Runner is an unusual and powerful novel that has become a beloved, one-of-a-kind classic.',
        status:'new',
    },
    {
        title:'Choose Possibility',
        description:'Wall Street Journal bestseller | An indispensable guide to decision-making and risk-taking for anyone who finds themselves afraid of making a wrong choice in their career. This fresh, new approach comes from one of the most highly regarded and well-respected female tech executives in Silicon Valley, who made many wrong choices in her career, but learned how to turn those down moments into successes.',
        status:'new',
    }
]

   let newUser= new userModel({
       email:"duha@gmail.com",
       books:booksList
   })
    
console.log("hello")
    //// to save created object to connection (Book)////
    newUser.save();

   
};


module.exports ={ userModel,seedUser}
