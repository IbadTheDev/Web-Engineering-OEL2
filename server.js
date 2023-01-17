const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv');
const connectDB = require('./config/DB');

//config dot env file
dotenv.config();

//database call
connectDB();

//rest object
const app = express()


//middelwares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
app.get('/', (req,res)=>{
  res.send('<h1>Web engineering</h1>')
})


//port
const PORT = 5000 || process.env.PORT

//listen
app.listen(PORT, ()=> {
  console.log(`server running on port ${PORT}`);
})