import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "TasteTribe",
      useNewUrlParser: true, // Ensure these options are added
      useUnifiedTopology: true, // for compatibility with MongoDB server
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(
        `Some error occurred while connecting to the database: ${err}`
      );
    });
};
