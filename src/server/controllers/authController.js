const User = require('../models/Users');


const createUser = (req, res) => {
    const data = req.body;
    const user = new User(data);
    user.save()
        .then(result => res.redirect('/'))
        .catch((err) => res.send(err));
}


module.exports= {createUser,}