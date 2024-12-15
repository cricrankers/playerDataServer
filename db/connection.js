import { MongoClient } from 'mongodb';
import 'dotenv/config';

const uri = process.env.MONGO_URI;


if (!uri) {
    throw new Error("MONGO_URI environment variable is not set");
}

const client = new MongoClient(uri);

async function connectDB(){

   try 
   {
     await client.connect()
     console.log("Connected to MongoDB");
   } 
   catch (error){
    console.log("Something went wrong in database connectivity",error);
   }

}

process.on('SIGINT', async () => {
    await client.close();
    console.log("MongoDB connection closed");
    process.exit(0);
});


export { connectDB, client };
