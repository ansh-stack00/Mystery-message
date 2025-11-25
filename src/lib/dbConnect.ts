import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection : ConnectionObject = {};

async function dbConnect() : Promise<void> {

    // check if db already connected
    if(connection.isConnected) {
        console.log(`already connected to database`);
        return ; 
    }

    // db connection if it is not connected 

    try {

        const db = await mongoose.connect(process.env.MONGODB_URI || '' )

        connection.isConnected = db.connections[0].readyState

        console.log("Database connected succesfully")
        
    } catch (error) {
        
        console.log("database connection failed" , error)
        process.exit(1)
    }
}

export default dbConnect;