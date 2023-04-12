//modules
import express from "express"
import cors from "cors"
import router from "./router/route.js"
import cookieParser from "cookie-parser"
import {connDB} from "./db/conn.js"
import  {config} from "dotenv"
const app = express();
connDB();   
//middle wares

config({
    path:'./db/.env'
})

app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000',
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);

const port = process.env.PORT || 3000;

app.get('/', cors(), (req, res, next) => {
    
})

app.listen(port, () => {
    console.log(`Server is running at port No: ${port}`);
});

export default port