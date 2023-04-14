import mongoose from 'mongoose';
import validator from 'validator';
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
    },
    id:[{
        type:Number
    }]
})

const User = mongoose.model('User', userSchema);
export default User;