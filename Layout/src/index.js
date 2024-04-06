import dotenv from 'dotenv';
dotenv.config()
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dbconnction from './databse/dbconnection.js'
import router from './router/router.js'
import initializeFirebaseApp from './databse/firbaseconnecion.js'
const app = express()

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

app.use("*", cors());
app.use(morgan("dev"));
app.use('*',
    cors()
);

// app.use('/',()=>{
//     console.log("is work")
// })
// app.get('/', async (req, res, next) => {
//     res.send({message: 'Awesome it works 🐻'});
// });

app.use('/ds',router)
dbconnction()
initializeFirebaseApp()
app.use((req, res, next) => {
    next(createError.NotFound);
  });


  
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      status: err.status || 500,
      message: err.message,
    });
  });

const PORT = process.env.PORT ||8000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));