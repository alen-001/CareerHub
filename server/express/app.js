import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import recommendationRoutes from './routes/recommendationRoutes.js';
import chatbotRoutes from './routes/chatbotRoutes.js';
import resumeRoutes from './routes/resumeRoutes.js';
import flashcardsRoutes from './routes/flashcardRoutes.js';
import cors from 'cors';
const app = express();
dotenv.config();
app.use(cors({
    origin: 'https://career-hub-eta.vercel.app',  //prod url
    // origin: 'http://localhost:5173', //dev url
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

// import dotenv from 'dotenv';
// dotenv.config();
// const FAST_API_URL = process.env.FAST_API_URL;
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/api/user', userRoutes);
app.use("/api/auth", authRoutes);
app.use('/api/recommendations',recommendationRoutes);
app.use('/api/chatbot',chatbotRoutes);
app.use('/api/resume',resumeRoutes);
app.use('/api/flashcards',flashcardsRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));