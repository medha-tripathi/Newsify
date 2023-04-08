//modules
const express = require('express');
var cors = require('cors')
const router = require('./router/route');
var cookieParser=require('cookie-parser')
require('./db/conn')

const app = express();

//middle wares
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);

const port = process.env.PORT || 3000;

app.get('/', cors(), (req, res, next) => {
    
})

app.listen(port, () => {
    console.log(`Server is running at port No: ${port}`);
});