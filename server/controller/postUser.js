const express = require("express");
const router = express.Router();
const UserModel = require("../models/user.model")
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const app = express();
const cors = require('cors')
app.use(cors())

const createNewUser = async (req, res) => {
    // const {data} =req.body;
    console.log(req.body);
      
      if (!req.body) {
        return res.status(404).json({
          success: false,
          message: "data not provided",
        });
      }
  
      await UserModel.create(req.body);
      const users=await UserModel.find();
    
      return res.status(200).json({
        success: true,
        data: users,
      });
  }

//   app.post('/', jsonParser, createNewUser);
  

router.post('/',jsonParser,createNewUser);
module.exports = router;
