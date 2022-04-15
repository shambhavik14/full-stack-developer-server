import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userController   from "./controllers/user-controller.js";
import tuitsController   from "./controllers/tuits-controller.js";



const DB_CONNECTION_STRING = 'mongodb+srv://giuseppi:supersecretpassword@cluster0.psger.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
 || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);


const app = express();
app.use(cors());
app.use(express.json());
userController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);

/*mongoose.connect('mongodb://localhost:27017/webdev');*/