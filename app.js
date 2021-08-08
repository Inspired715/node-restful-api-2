const express = require('express')
const api = require('./route/api')
const web = require('./route/web')
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/", api);
app.use("/", web);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});