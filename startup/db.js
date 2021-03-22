import mongoose from 'mongoose'

const connectDB = async () => {
  const url = process.env.DB_URL
  try{
    const conn = await mongoose.connect((url), {
      useNewUrlParser : true,
      useUnifiedTopology: true,
      useCreateIndex : true
    });
    console.log(`Connected to the DB: ${conn.connection.host}`)
  }catch(error){
    console.log(`Failed to connect: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB;
