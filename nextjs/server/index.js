const express = require( 'express' );
const boddParser = require( 'body-parser' );
const cors = require('cors');
const passport = require('passport');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require( 'bcrypt' );

const app = express();


app.use(boddParser.json());
app.use(boddParser.urlencoded({ extended: true }));
app.use(expressSession({ secret: 'mySecretKey', resave:false, saveUninitialized: false}));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials:true
}));

app.use(cookieParser('mySecretKey'));

app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
    res.send( 'Hello World!' );
});

app.listen(3001, () => {
    console.log(  'servidor rodando na porta 3001'  );
});