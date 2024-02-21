const express = require('express')
const app = express();

const postRoute = require("./controller/postUser");
// …


const dotenv=require("dotenv");
dotenv.config();
const cors = require('cors')
app.use(cors())
app.use('/',postRoute);

// database connection
const DbConnection=require("./db/connection");
DbConnection();
// const {createNewUser} = require("./controllers/user.controller")



const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})