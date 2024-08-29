import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
import session from 'express-session';
import cookieParser from "cookie-parser";
import userRoute from './routes/user.js';
import passport from "passport";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import orderRoute from "../server/routes/order.js";
import cors from 'cors';

const app = express();
export default app;

dotenv.config({
    path:"./config/config.env",
})

app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,

    cookie:{
        secure:true,
        httpOnly:true,
        sameSite:"none"
    }
}))

app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({
    extended:true,
}))
app.use(cors({
    credentials:true,
    origin:process.env.FRONTEND_URL,
methods:["GET", "POST", "PUT", "DELETE"],}
))


app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

connectPassport();

app.use('/api/v1', userRoute);
app.use('/api/v1', orderRoute);



//using error middleware
app.use(errorMiddleware);