const express = require('express');
const app = express();

//const dbAccess = 'mongodb+srv://DawsonCooper:Allsnap36@store.fczgzcd.mongodb.net/?retryWrites=true&w=majority'

app.set('view engine', 'ejs');
app.listen(3000);



app.use((req, res, next) => {
    console.log('-----------------------------     New Request     -----------------------------------'); 
    console.log(req.method);
    console.log(req.path);
    next();
})
app.use(express.static('static'))
app.get('/', (req, res) => {
    res.render('index', {page: 'Home'});
})

app.get('/cart', (req, res) =>{
    res.render('cart', {page: 'Cart'});
})

app.get('/login', (req, res) =>{
    res.render('login', {page: 'Login'});
})

app.get('/register', (req, res) =>{
    res.render('register', {page: 'Register'});
})


app.use((req, res) => {

    res.status(404).render('404');
})