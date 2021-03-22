import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import notFound from '../middleware/notFound.js'
import errorHandler from '../middleware/errorHandler.js'

//dotenv config
dotenv.config()

//init express app
const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//public folder
app.use(express.static('./public'))

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

//Not Found handler
app.use(notFound())

//error handler
app.use(errorHandler())


export default app
