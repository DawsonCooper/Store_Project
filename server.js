const express = require('express');
const { MongoClient } = require('mongodb');
const dbAccess = 'mongodb+srv://DawsonCooper:Allsnap36@store.fczgzcd.mongodb.net/Store?retryWrites=true&w=majority';


const app = express();
  
let connection
let database
// this function will return our connection object
const getConnection = () => connection;

//This is our callback that will handle errors
const connectionCallback = (msg) => {
    if (!msg){
        // handle error
        
    }else{
        //handle success
        app.listen(5000);
        database = getConnection
    }
}
const dbConnect = (cb) => {
    MongoClient.connect(dbAccess)
    .then((client) => {
        connection = client.db()
        cb(true);
    })
    .catch((error) => {
        console.error(error)
        cb(false)
    });
}
// connect to the MongoDB db and pass in our callback that will handle errors
dbConnect(connectionCallback)




const authController = require('./server/controllers/authController')


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

app.get('/get-listings', (req, res) =>{
    // Get sample airbnb data from mongo db and send some paginated result to the client

    console.log('Get request for listings received from client');
    res.jsonp({msg: 'Sent a get request to express for listings.'});
});

app.post('/testcase', (req, res) =>{
    console.log('TestCase')
});
app.post('/create-user', authController.createUser)


app.use((req, res) => {

    res.status(404).render('404');
})