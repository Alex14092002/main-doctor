import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRoute from './routes/authRoute.mjs'

const app = express();
const port = 8000;
dotenv.config()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
  });
  
  db.once("open", () => {
    console.log("MongoDB connected successfully!");
  });


app.use('/api/auth' , authRoute)  

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
