import express from "express";
import session from "express-session";

import connectDB from "./config/db.js";
import fe_file_path from "./config/file_path.js";

import EmailRouter from "./routes/User.js";

import bodyParser from "body-parser";
import cors from "cors";

const PORT = 3434;
const app = express();

connectDB();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use;
  express.static;
  ("client/build");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
  });
}
app.use(
  session({
    secret: "hSnsdiu2Subnds5GdhDEfB", // Change this to a secure random string
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/email", EmailRouter);

// Serve static files from the React build directory
const reactBuildPath = fe_file_path.build;
app.use(express.static(reactBuildPath));

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
