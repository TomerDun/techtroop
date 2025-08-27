import express from 'express';
import { logger } from './middleware/logger.js';
import { addCounter } from './middleware/counter.js';
import { users } from './usersModel.js';
import { userExists, validateId } from './middleware/usersValidator.js';

const app = express();

app.use(express.json())
app.use(logger);
app.use(addCounter);

app.get('/', (req, res) => {
    res.send('Welcome to our server!')
})

app.get('/about', (req, res) => {
    res.send('Requests count: ' + req.counter);
})

app.get('/users', (req, res) => {
    res.json(users);
})

app.get('/users/:id', validateId, userExists, (req, res) => {
    const user = users.filter(u => u.id == req.params.id)[0]
    res.json(user);
})

app.post('/users', (req, res) => {
    const newUser = {
        name: req.body.name,
        id: users.length + 1
    }
    users.push(newUser);
    res.status(201).json(newUser);
})

// Error handling middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.code || 500).json({
        success: false,
        message: err.message || "Server Error"
    })
})


app.listen(8080, () => {
    console.log('Server listening on port 8080...');
    
})

