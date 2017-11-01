const mongo = require('mongodb')

//Mongo setup
let MongoClient = mongo.MongoClient
let db_url = 'mongodb://localhost:27017/clonedb'
const initial_users = require('./data/users')
const initial_threads = require('./data/threads')

MongoClient.connect(db_url, (err, db) => {
    if(err){throw err}
    console.log('Database created and connected...')
    db.createCollection('users', (err, res) => {
        if(err){throw err}
        consoe.log('users collection created...')
    })
    db.collection('users').insertMany(initial_users, (err, res) => {
        if(err){throw err}
        console.log('Inital users added...')    
    })
    db.createCollection('threads', (err, res) => {
        if(err){throw err}
        console.log('threads collection created...')    
    })
    db.collection('threads').insertMany(initial_threads, (err, res) => {
        if(err){throw err}
        console.log('Initial threads added...')    
    })
    db.close();        
})
