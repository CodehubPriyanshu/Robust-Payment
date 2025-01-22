import mongoose from "mongoose";

export function dbConnection() {
  const mongoUrl = process.env.MONGO_URL; // Access the environment variable
  if (!mongoUrl) {
    console.error("MongoDB connection string is missing in the environment file.");
    return;
  }
  
  mongoose
    .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("DB Connected Successfully");
    })
    .catch((error) => {
      console.error("DB Failed to connect", error);
    });
}
