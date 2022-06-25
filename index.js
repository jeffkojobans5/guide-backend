import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./api/routes/auth.js";
import usersRoute from "./api/routes/users.js";
import hotelsRoute from "./api/routes/hotels.js";
import roomsRoute from "./api/routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://jeff:jeff@cluster0.yqpwu.mongodb.net/?retryWrites=true&w=majority");
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};



mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!"); 
});

// middlewares
const corsOptions = {
    origin: 'https://guide-two.vercel.app', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200    
}

app.use(cors(corsOptions));
// app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);


app.use((err, req, res, next) => {


  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Expose-Headers', 'Content-Type');
    
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// 

// 


app.listen(process.env.PORT || 8800, () => {
  connect();
  console.log("Connected to backend.");
});


