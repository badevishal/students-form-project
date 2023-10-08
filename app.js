import express from "express";
import { configDotenv } from "dotenv";
import { join } from "path";

import web from "./Routes/web.js";
import { connectDB } from "./db/connectdb.js";

configDotenv();

const app = express();
const port = process.env.PORT;

const DATABASE_URL = process.env.DATABASE_URL;

// Database Connection.
connectDB(DATABASE_URL);

// Set views directory.
app.set("views", "./views");

// Setup Template Engine.
app.set("view engine", "ejs");


// Static Files.
app.use(express.static(join(process.cwd(), "public")));

// url Encoded.
app.use(express.urlencoded({ extended: false }));

// Routes Load.
app.use("/", web);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
