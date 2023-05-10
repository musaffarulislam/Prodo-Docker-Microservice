import mongoose from "mongoose"

export default () => {
    const uri:string = String(process.env.MONGO_URI)
    console.log("userdb uri :", uri)
    mongoose.set("strictQuery", false);

    mongoose.connect(uri).then(() => {
        console.log("Database connected successfully")
    }).catch((error) => {
        console.log(`Database connection failed : ${error}`);

    })
}