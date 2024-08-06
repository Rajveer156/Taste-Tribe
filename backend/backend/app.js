import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import registrationRouter from "./routes/registrationRoute.js";
import { dbConnection } from "./Database/dbconnection.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

// Enable CORS for frontend requests
app.use(
  cors({
    origin: [process.env.FRONTEND_URL], // Ensure FRONTEND_URL is correctly set
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

app.use("/api/reservation", reservationRouter);
app.use("/api/registration", registrationRouter);

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

// Database connection
dbConnection();

// Error handling middleware
app.use(errorMiddleware);


export default app;
