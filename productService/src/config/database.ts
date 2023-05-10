import mongoose from "mongoose"

export default () => {
    const uri = process.env.MONGO_URI
    console.log("authdb uri :", uri)
    mongoose.set("strictQuery", false);

    mongoose.connect(uri).then(() => {
        console.log("Database connected successfully")
    }).catch((error) => {
        console.log(`Database connection failed : ${error}`);

    })
}