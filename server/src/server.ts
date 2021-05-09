import express,{ Application, Request, Response, NextFunction } from 'express';
const dotenv = require('dotenv');
const helmet = require('helmet');
const socketio = require('socket.io');
const morgan = require('morgan');
const cors = require('cors')
const http = require('http');
const mongoose = require('mongoose');


//* Application Intialization
const app:Application = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
     origin: "http://localhost:3000",
     methods: ["GET", "POST"]
  }
});

//* Middleware
dotenv.config();                 //* Enables us to access the environment variables declared in the .env file
app.use(helmet());              //*  Adds additional security to our app
app.use(morgan('tiny'));       //*   Log the details to our console when we hit a routes
app.use(cors());              //*    Cross-origin support enabled

//* Routes
app.get("/",(req:Request,res:Response) => {
  res.send("Hello World")
})

//* MongoDB Connection
mongoose.connect("mongodb://localhost/chat",{ useNewUrlParser:true,useUnifiedTopology: true})
  .then(() => console.log("Successful database connection"))
  .catch(() => console.log("Database connection failure") )


//* SocketIO Logic
io.on('connection', (socket:any) => {
  console.log("We have a new Connction, ", socket.id);

  socket.on("disconnect", () => {
     console.log("User Disconnected");
  })
})



//* Listening Port
server.listen(process.env.PORT,() => console.log(`Server running on http://localhost:${process.env.PORT}`));

