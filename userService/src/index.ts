import express,{Application, Request, Response, NextFunction} from 'express'
import morgan from 'morgan'
import userRouter from './routes/userRoutes';
import connectDB from './config/mongodbConnection';
import dotenv from 'dotenv'
dotenv.config()
connectDB()

const app:Application = express()

app.use('/', userRouter);

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const PORT : number = Number(process.env.PORT) || 4000
app.listen(PORT, ()=> console.log(`Server is on ${PORT}`))
