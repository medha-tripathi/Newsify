const express = require('express');
const mongoose = require('mongoose');
const validator = require('validator');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');
var cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())
mongoose.connect('mongodb://localhost:27017', {
    dbName: "backend",
}).then(() => {
    console.log("DB connected");
}).catch((e) => {
    console.log(e);
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(v) {
            if (!validator.isEmail(v)) {
                throw new Error("Enter A valid email")
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    cpassword: { type: String }
})

const User = mongoose.model('User', userSchema);

const port = process.env.PORT || 3000;


const static_path = path.join(path.resolve(), "public");

//using middlewares
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', cors(), (req, res, next) => {
    
})


app.post('/', async (req, res) => {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
        return res.json('not exists');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.json('wrong password');
    }
    const token = jwt.sign({ _id: user._id }, 'akdlfjladjf')
    res.cookie('token', token, {
        httpOnly: true, expires: new Date(Date.now() + 60 * 1000)
    });
    res.json('matched');
})

app.post('/signup', async (req, res) => {
    const { name, email, password, cpassword } = req.body;

    let user = await User.findOne({ email });
    if (password !== cpassword) {
        return res.json('passwords are not matching')
    }
    if (user) {
        return res.json('email exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hashedPassword });
    const token = jwt.sign({ _id: user._id }, 'akdlfjladjf')
    res.cookie('token', token, {
        httpOnly: true, expires: new Date(Date.now() + 60 * 1000)
    });
    res.json('registered');
})


app.listen(port, () => {
    console.log(`Server is running at port No: ${port}`);
});