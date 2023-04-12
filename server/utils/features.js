import jwt from "jsonwebtoken"
export const sendCookie = (user, res, message, statusCode = 200) => {

    const token = jwt.sign({ _id: user._id }, 'akdlfjladjf')

    res.status(statusCode)
        .cookie('token', token, {
            httpOnly: true, expires: new Date(Date.now() + 15 * 60 * 1000),
            sameSite:process.env.NODE_ENV==="Development"?"lax":"none",
            secure:process.env.NODE_ENV==="Development"?false:true,
        })
        .json({
            success: true,
            message,
        }
        );
}
