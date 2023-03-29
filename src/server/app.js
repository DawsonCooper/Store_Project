const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbAccess = 'mongodb+srv://DawsonCooper:Allsnap36@store.fczgzcd.mongodb.net/Store?retryWrites=true&w=majority'
const Item = require('./models/Items');
const User = require('./models/Users');

mongoose.connect(dbAccess, { useNewUrlParser:true, useUnifiedTopology:true })
    .then((result) => {
        console.log({result})
        app.listen(3000);
    })
    .catch((err) =>{console.log({err})});



app.set('view engine', 'ejs');
app.use(express.static('static'))
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    console.log('-----------------------------     New Request     -----------------------------------'); 
    console.log(req.method);
    console.log(req.path);
    next();
})



app.get('/', (req, res) => {
    
    Item.find()
        .then((result) => {console.log(result)
                            res.render('index', {items: result, page: 'Home', error: false})})
        .catch((err) => {res.render('index', {error: true, page: 'Home'})});
})
/*
app.get('/new-item', (req, res) => {
    const item = new Item({
        name: 'Golf Club',
        price: 99,
        tags: ['Golf', 'Outdoors', 'Sports', 'Golf Club'],
        description: 'Driving Iron Golf Club (2)'

    })
    item.save()
        .then(result => res.send(result))
        .catch((err) => res.send(err));
})
*/
app.get('/cart', (req, res) =>{
    res.render('cart', {page: 'Cart'});
})

app.get('/login', (req, res) =>{
    res.render('login', {page: 'Login'});
})

app.get('/register', (req, res) =>{
    res.render('register', {page: 'Register'});
})

app.post('/login-form', (req, res) =>{
    const data = req.body;

})
app.post('/create-user', (req, res) =>{
    const data = req.body;
    const user = new User(data);
    user.save()
        .then(result => res.redirect('/'))
        .catch((err) => res.send(err));
})


app.use((req, res) => {

    res.status(404).render('404');
})