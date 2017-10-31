const express = require('express');
const app = express();
const path = require('path');

//Set up some API endpoints
app.get('/api', (req, res) => {
    res.send('API Requested'); 
});

//Serve the webapplication
app.get('*', (req, res) => {
    res.sendFile(path.resolve('../webapp/index.html'));    
});

//Serve the static files
app.use(express.static(path.resolve('../webapp')));

app.listen(8080, () => {
    console.log('App listening on port 8080');    
});