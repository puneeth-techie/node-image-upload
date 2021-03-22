import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

//dotenv config
dotenv.config()

//init express app
const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}


export default app
