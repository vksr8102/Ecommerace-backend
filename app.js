const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const routes = require("./routes")
const session = require("express-session")

dotenv.config({path:'.env'})
const dbConnection = require("./config/db")
dbConnection();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.use(routes)

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
      console.log(`your application is running on ${port}`);
    });
  } else {
    module.exports = app;
  }

