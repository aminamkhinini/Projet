const express=require('express');
var cors = require('cors');
const path = require('path')
const app = express()





//Middlewares
app.use(express.json())
app.use(cors())
app.use("/uploads",express.static(__dirname + "/uploads"))


const mongoose=require('mongoose');
require('dotenv').config({path:'./.env'});

//routes

app.use('/user',require('./routes/user'));
app.use('/category',require('./routes/category'));
app.use('/img',require('./routes/upload'));
app.use('/item',require('./routes/item'));
app.use('/order',require('./routes/order'));
app.use('/cart',require('./routes/cart'));


// mongoose connect
const PORT=process.env.PORT || 5000;
const mongo_uri=process.env.MONGO_URL

mongoose
.connect(mongo_uri,{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true,
    useFindAndModify: false},err =>{
        if(err) throw err;
        console.log('Connected to MongoDB')
    })
    if(process.env.NODE_ENV === 'production'){
        app.use(express.static('client/build'))
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
        })
    }
    

app.listen(PORT ,(err) =>(err ? console.log(err): console.log(`server is running on port ${PORT}`)))



