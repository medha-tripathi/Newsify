const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017', {
    dbName: "backend",
}).then(() => {
    console.log("DB connected");
}).catch((e) => {
    console.log(e);
})