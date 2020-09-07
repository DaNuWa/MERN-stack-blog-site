const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const postroutes=require('./Routes/postroutes');
const adminroutes=require('./Routes/adminroutes');
const authroutes=require('./Routes/authroutes');


const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());


const dbURI = 'mongodb+srv://yohan:abc@123@cluster0.is70t.mongodb.net/blog';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => {console.log('Working'); app.listen(4000)})
  .catch((err) => console.log(err));

  app.use('/admin',adminroutes);
  app.use(postroutes);