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
app.set('view engine', 'ejs');
app.use(express.static('static'))
app.use(express.urlencoded({ extended: true }))

app.get('/listings', (req, res) =>{
    // Get sample airbnb data from mongo db and send some paginated result to the client
    let listingsArray = [];
    database.collection('listingsAndReviews').find().limit(20).forEach(listing => {
        listingsArray.push(listing);
    }).then(() => {
        console.log(listingsArray);
        return res.status(200).json(listingsArray);
    }).catch(err => {
        res.status(500).json({error: 'We are having trouble getting your listings'});
    })
    console.log('Get request for listings received from client');

});

app.get('/pagination', (req, res) =>{
    let listingsArray = [];
    console.log(req.query.page)
    const skipAmount = req.query.page * 20;
    database.collection('listingsAndReviews').find().skip(skipAmount).limit(20).forEach(listing => {
        listingsArray.push(listing);
    }).then(() => {
        //console.log(listingsArray);
        return res.status(200).json(listingsArray);
    }).catch(err => {
        res.status(500).json({error: 'We are having trouble getting your listings'});
    })
    console.log('Get request for a new set of listings received from client');
});

app.get('/filtered', (req, res) =>{
    let listingsArray = [];
    console.log(req.query.filter)
    const skipAmount = req.query.page * 20;
    database.collection('listingsAndReviews').find({property_type: req.query.filter}).skip(skipAmount).limit(20).forEach(listing => {
        listingsArray.push(listing);
    }).then(() => {
        //console.log(listingsArray);
        return res.status(200).json(listingsArray);
    }).catch(err => {
        res.status(500).json({error: 'We are having trouble getting your listings'});
    })
    console.log('Get request for a new set of listings received from client');
});
