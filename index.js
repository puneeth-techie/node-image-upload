import http from 'http'
import app from './startup/app.js'
import connectDB from './startup/db.js'

//creating server
const server = http.createServer(app);
const port = process.env.PORT || 5000

//init server
server.listen((port), () => {
    console.log(`Server started on the port ${port}`)
})

//Init DB
connectDB()
