//modules
import express from "express"
import cors from "cors"
import router from "./router/route.js"
import cookieParser from "cookie-parser"
// import connDB from "./db/conn.js"
import connectDB from "./db/conn.js"
import  dotenv,{config} from "dotenv"
// const dotenv = require("dotenv");

const app = express();
// connDB();

//middle wares

config({
    path:'./db/.env'
})

app.use(express.json());
app.use(cors({
    origin:'http://localhost:3001',
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);
dotenv.config();

const port = process.env.PORT || 4000;

app.get('/', cors(), (req, res, next) => {
    
})

app.listen(port, () => {
    console.log(`Server is running at port No: ${port}`);
});

export default port
connectDB();