const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const dbAccess = 'mongodb://localhost:27017/sample_airbnb';


const app = express();
  
let connection
let database
// this function will return our connection object
const getConnection = () => {
    console.log({connection})
    console.log({database})
    return connection
};

//This is our callback that will handle errors
const connectionCallback = (test) => {
    if (!test){
        // handle error
        console.log('Broken connection')
    }else{
        //handle success
        app.listen(5000);
        database = getConnection()
    }
}

// this function will connect to the database when requested and run our callback to handle that response 
const dbConnect = (cb) => {
    MongoClient.connect(dbAccess)
    .then((client) => {
        connection = client.db()
        cb(true);
    })
    .catch((error) => {
        console.error({error})
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

app.get('/', (req, res) =>{
    // Get sample airbnb data from mongo db and send some paginated result to the client
    let listingsArray = [10];
    database.collection('listingsAndReviews').find().limit(10).forEach(listing => {
        listingsArray.push(listing);
    }).then(result => {
        res.status(200).json({ listingsArray })
    }).catch(err => {
        res.status(500).json({error: 'We are having trouble getting your listings'})
    })
    console.log('Get request for listings received from client');
    res.json({msg: 'Sent a get request to express for listings.'});
});

app.post('/testcase', (req, res) =>{
    console.log('TestCase')
    let listings = [];
    database.collection('listingsAndReviews')
    .find()
    .limit(10)
    .forEach(listing => {
        listings.push(listing);
    }).then(result =>{
        console.log(listings)
        res.status(200).json({ listings })
    }).catch(err => {
        res.status(500).json({msg: 'Cannot find listings'});
    })
    
});
app.post('/create-user', authController.createUser)
