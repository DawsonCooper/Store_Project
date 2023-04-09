const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbAccess = 'mongodb+srv://DawsonCooper:Allsnap36@store.fczgzcd.mongodb.net/Store?retryWrites=true&w=majority'


const authController = require('./src/server/controllers/authController')

mongoose.connect(dbAccess, { useNewUrlParser:true, useUnifiedTopology:true })
    .then((result) => {
        
        app.listen(5000);
    })
    .catch((err) =>{console.log({err})});



app.set('view engine', 'ejs');
app.use(express.static('static'))
app.use(express.urlencoded({ extended: true }))
/*
app.get('/', (req, res) => {    
    res.render('index', {page: 'Home'})
})

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

app.get('/search', (req, res) =>{
    res.render('search', {page: 'Search'});
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
*/

app.post('/testcase', (req, res) =>{
    console.log('TestCase')
});
app.post('/create-user', authController.createUser)


app.use((req, res) => {

    res.status(404).render('404');
})