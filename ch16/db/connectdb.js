import mongoose from "mongoose";

const connectDB = (DATABASE_URI ) => {

    const DB_OPTIONS = {
        user:'express',
        pass:'123456',
        dbName:'schooldb',
        authSource:'schooldb'
    }

    return mongoose.connect( DATABASE_URI,DB_OPTIONS ).then(() => {
        console.log('texting db connection ! -> Connected successfully ! ')
    }).catch((error) => {
        console.log(error)
    })
}

export default connectDB