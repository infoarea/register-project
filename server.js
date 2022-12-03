import express from 'express';
import dotenv from 'dotenv';
import expresslayout from 'express-ejs-layouts';
import cookieParser from 'cookie-parser';
import collors from 'colors';
import { mongoDBConnection } from './config/db.js';

const app = express();
//init dotenv
dotenv.config();
const PORT = process.env.PORT || 4000;


//ejs init
app.set('view engine', 'ejs');
//express layout
app.use(expresslayout);
app.set('layout', 'layouts/app');

//Data manage
app.use(express.json());
app.use(express.urlencoded( { extended : false } ));

//Cookie parser for manage cookie
app.use(cookieParser());

//Folter static
app.use(express.static('public'));


app.get('/', ( req, res )=>{
    res.render('index', {
        title : 'Hello'
    })
})


app.get('/user', ( req, res )=>{
   res.locals.title = "This is title"
   res.render('index', {
    title : res.locals.title 
   })
})

// server listen
app.listen( PORT, ()=> {
    mongoDBConnection()
    console.log(`Server is running ${PORT}`.bgGreen.black);
})
