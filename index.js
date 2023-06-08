const express = require('express');
const path = require('path');
const logger = require('./middleware/logger.js')
const members = require('./Members.js')
const app = express();

//this is how you use middleware
//Init middleware
//app.use(logger);

//gets all members
app.get('/api/members', (req, res) => res.json(members));


// get single member
app.get('/api/members/:id', (req, res) => {
    res.send(req.params.id);
});

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));