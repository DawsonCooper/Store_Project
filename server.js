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
    const filter = req.query.filter;
    let listingsArray = [];
    console.log(filter)
    switch (filter) {
        case '6':
            console.log('in mansion case')
            database.collection('listingsAndReviews').find({bedrooms: {$gt: 6}}).limit(20).forEach(listing => {
                listingsArray.push(listing);
            }).then(() => {
                return res.status(200).json(listingsArray);
            }).catch(err => {
                res.status(500).json({error: 'We are having trouble getting your listings'});
            })
            break;
        case '200':
            console.log('in trending case')
            database.collection('listingsAndReviews').find({number_of_reviews: {$gt: 200}}).limit(20).sort({number_of_reviews: -1}).forEach(listing => {
                listingsArray.push(listing);
            }).then(() => {
                return res.status(200).json(listingsArray);
            }).catch(err => {
                res.status(500).json({error: 'We are having trouble getting your listings'});
            })
            break;
        case 'Wheelchair':
        case 'Kitchen':
        case 'Waterfront':
        case 'pool':
            console.log('In property types cases')
            const amenitiesRegex = new RegExp(filter)
            console.log({amenitiesRegex})
            database.collection('listingsAndReviews').find({amenities: amenitiesRegex}).limit(20).forEach(listing => {
                listingsArray.push(listing);
            }).then(() => {
                return res.status(200).json(listingsArray);
            }).catch(err => {
                res.status(500).json({error: 'We are having trouble getting your listings'});
            })

            break;
        default: 
            console.log('In property types cases')
            const propertyRegex = new RegExp(filter)
            console.log({propertyRegex})
            database.collection('listingsAndReviews').find({property_type: propertyRegex}).limit(20).forEach(listing => {
                listingsArray.push(listing);
            }).then(() => {
                return res.status(200).json(listingsArray);
            }).catch(err => {
                res.status(500).json({error: 'We are having trouble getting your listings'});
            })
            break;
    }
    console.log('Get request for a filtered set of listings received from client');
});
