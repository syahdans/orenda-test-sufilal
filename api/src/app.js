const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");
const db = require("./database");
const bodyParser = require('body-parser')

const initApp = async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");

    app
      .use(bodyParser.urlencoded({ extended: false }))
      .use(bodyParser.json());

    app.use(express.json());

    app.use("/api", routes);

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

initApp();