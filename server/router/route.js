import express from 'express';
const router = new express.Router();
import User from "../models/auth.js"
import bcrypt from 'bcrypt'
import { sendCookie } from "../utils/features.js"
import jwt from "jsonwebtoken"


router.post('/', async (req, res) => {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json('not exists');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.json('wrong password');
    }
    sendCookie(user, res, "matched", 200);
})

router.post('/signup', async (req, res) => {
    const { name, email, password, cpassword } = req.body;

    let user = await User.findOne({ email });
    if (password !== cpassword) {
        return res.status(404).json('passwords are not matching')
    }
    if (user) {
        return res.json('email exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hashedPassword });
    sendCookie(user, res, "registered", 201);
})

router.get('/logout', (req, res) => {
    res.status(200).cookie("token", "",{
        httpOnly: true,
        expires: new Date(Date.now()),
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true,
    }
    ).json({
        success: true,
        user: req.user,
    });
})
router.get('/users', async(req, res) => {
    const {token}=req.cookies;
    if(!token){
        return res.json({
            success:false,
            message:"Login First",
        });
    }
    const decoded=jwt.verify(token,'akdlfjladjf');
    const user = await User.findById(decoded._id);
    res.status(200).json({
        success:true,
        user,
    })
})


export default router;