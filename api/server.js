const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//Set up some API endpoints
app.get('/api', (req, res) => {
    res.send('API Requested')
})

app.get('/api/getThreadsForUser', (req, res) => {
    let user = req.query.user
    console.log('Getting threads for '+user)
    getThreadsForUser(user,(threads)=>{
        res.send(threads)
    })
})

app.get('/api/getAllThreads', (req, res) => {
    getAllThreads((threads)=>{
        res.send(threads)    
    })
})

app.put('/api/newMessage', (req, res) => {
    console.log(req.body)
    let user = req.body.user
    let id = req.body.id
    let message = req.body.message
    console.log('New message from '+user+' : '+message)
    getThreadsForUser(user, (threads)=>{
        let thread = {}
        for(var i=0;i<threads.length;i++){
            if(threads[i]._id == id){
                thread = threads[i]
                break
            }
        }
        thread.messages.push({
            from: user,
            timestamp: (new Date()).getTime(),
            text: message   
        })
        updateThread(thread, (result)=>{
                res.send(result)
        })
    })
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

//Define Mongo functions
let MongoClient = require('mongodb').MongoClient
let db_url = 'mongodb://localhost:27017/clonedb'

function getThreadsForUser(user,callback){
    MongoClient.connect(db_url, (err, db) => {
        db.collection('threads').find({users:user}).toArray((err,result)=>{
            if(err){throw err}
            db.close()
            result = addThreadNames(result)
            callback(result)
        })
    })    
}

function getAllThreads(callback){
    MongoClient.connect(db_url, (err, db) => {
        db.collection('threads').find({}).toArray((err,result)=>{
            if(err){throw err}
            db.close()
            result = addThreadNames(result)
            callback(result)
        })   
    })    
}

function addNewThread(thread,callback){
     MongoClient.connect(db_url, (err, db) => {
        db.collection('threads').insertOne(thread,(err,result)=>{
            if(err){throw err}
            db.close()
            console.log('Thread created')
            callback(result)
        })   
    })    
}

function addThreadNames(threads){
    for(var i=0;i<threads.length;i++){
        let users = threads[i].users
        let name = users.join(', ')
        threads[i].name = name
    }    
    return threads
}

function getAllUsers(callback){
     MongoClient.connect(db_url, (err, db) => {
        db.collection('users').find({}).toArray((err,result)=>{
            if(err){throw err}
            db.close()
            callback(result)
        })   
    })    
}

function updateThread(thread, callback){
     MongoClient.connect(db_url, (err, db) => {
        db.collection('threads').updateOne({users:thread.users},thread, (err,result)=>{
            if(err){throw err}
            db.close()
            console.log('Thread updated')
            callback(result)
        })   
    })    
}
