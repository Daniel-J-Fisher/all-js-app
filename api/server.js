const express = require('express')
const app = express()
const path = require('path')

//Set up some API endpoints
app.get('/api', (req, res) => {
    res.send('API Requested')
})

app.get('/api/getThreadsForUser', (req, res) => {
    res.send('Hello, getting threads')
})

//Serve the webapplication
app.get('/', (req, res) => {
    res.sendFile(path.resolve('../webapp/index.html'))
})
//function(req, res){};

//Serve the static files
app.use(express.static(path.resolve('../webapp')))
app.use('/scripts', express.static(path.resolve('../node_modules')))

app.listen(8080, () => {
    console.log('App listening on port 8080')
})
