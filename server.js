require("dotenv").config(); // read .env files
const express = require("express");

const app = express();

const port = process.env.PORT || 3001;

// setup public folder as root
app.use(express.static("public"));

// Allow front-end access to node_modules folder
app.use("/scripts", express.static(`${__dirname}/node_modules`));

app.listen(port, () => {
  console.log("Front end listening on %d", port);
});
