import express from 'express'
import mongoose from "mongoose";
import cors from 'cors';
import session from 'express-session'
import ProfileController from "./controllers/profile/profile-controller.js";
import BronzeUserController from "./controllers/users/users-bronze-controller.js"
import GoldUserController from "./controllers/users/users-gold-controller.js"
import AdminUserController from "./controllers/users/users-admin-controller.js"
import SessionController from "./controllers/session/session-controller.js";
import FollowsController from "./controllers/follows/follows-controller.js";
import ReviewController from "./controllers/review/review-controller.js";
import BuyinController from "./controllers/buyIn/buyin-controller.js";

const CONNECTION_STRING = 'mongodb+srv://giuseppi:supersecretpassword@cluster0.dsu2jvc.mongodb.net/?retryWrites=true&w=majority' || 'mongodb://127.0.0.1:27017/stonkview'
mongoose.connect(CONNECTION_STRING).then(() => console.log('Successfully connected to DB!') );

const app = express()

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}))

app.use(session({
  secret: 'SatoshiNakamotoSecret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true}
}))

app.use(express.json())

BronzeUserController(app)
GoldUserController(app)
AdminUserController(app)
SessionController(app)
ProfileController(app)
FollowsController(app)
ReviewController(app)
BuyinController(app)

app.listen(process.env.PORT ||4000)



