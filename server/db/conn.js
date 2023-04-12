import mongoose from "mongoose";

export const connDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017', {
        dbName: "backend",
    }).then(() => {
        console.log("DB connected");
    }).catch((e) => {
        console.log(e);
    })
}

export default  connDB