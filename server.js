const express = require ("express");
require('dotenv').config()
const mongoose = require('mongoose');
app = express();


 mongoose.connect(process.env.DATABASE_URL);
 const db = mongoose.connection;
db.on('error',(error)=>console.error(error));
db.once('open',()=>console.log('connected to database'));
const userRouter = require('./routes/useRoute')
app.use(express.json());
app.use('/users',userRouter)
app.listen(3000,()=>{
    console.log('the server is listening...');
})