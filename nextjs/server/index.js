const express = require( 'express' );
const boddParser = require( 'body-parser' );
const cors = require('cors');
const passport = require('passport');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require( 'bcrypt' );
const db = require('./db');

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


app.post('/cadastro', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const query = "INSERT INTO account (`username`, `password`) VALUES (?, ?)";
    const query2 = "SELECT * FROM account WHERE username = ? ";



db.query(query2, [username], (err, result) => {
    if (err) {throw err;}
    if(result.length > 0){
        res.send({message:'Usuário já existe'});
    }
    if(result.length === 0){
        const hashedPassword = bcrypt.hashSync(password, 10);
        db.query(query, [username,hashedPassword], (err, result) =>{
            if(err){throw err;}
            res.send({message: "Usuario cadastrado com sucesso!"});
        })

    }
    });
});


app.listen(3001, () => {
    console.log(  'servidor rodando na porta 3001'  );
});