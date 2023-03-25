const express = require('express');


const app = express();
app.set('view engine', 'ejs');
app.listen(3000);

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/cart', (req, res) =>{
    res.render('cart');
})

app.get('/login', (req, res) =>{
    res.render('login');
})

app.get('/register', (req, res) =>{
    res.render('register');
})


app.use((req, res) => {

    res.status(404).render('404');
})