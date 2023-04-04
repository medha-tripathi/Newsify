const express = require('express');
const router= new express.Router();
const User=require('../models/auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


router.post('/', async (req, res) => {
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

router.post('/signup', async (req, res) => {
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



module.exports =router;