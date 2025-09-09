const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}).then(function (people) {
        res.send(people)
    })
})

router.post('/people', (req, res) => {
    console.log('posting to /people');    
    console.log('body: ', req.body);

    try {
        const newPerson = new Person(req.body);
        newPerson.save();
        console.log('--added new person--');
        res.status(201).send('Added Person')
    } catch (err) {
        console.log('Error creating person: ', err);
        res.status(400).send('Post to people failed');
        
    }
})

router.put('/people/:personId', async (req, res) => {
    const id = req.params.personId;
    console.log('personId: ', id);
    
    const newPerson = await Person.findByIdAndUpdate(id, req.body, {new: true});
    res.status(201).json(newPerson);
    

})

module.exports = router
