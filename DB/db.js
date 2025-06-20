require('dotenv').config()
// middleware

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cksixld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


let db;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


const connectDB = async () => {
    try {
        db = client.db('emaJohnDB');
        // Send a ping to confirm a successful connection
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {

        console.error('MongoDB connection failed:', error);
        console.log(error.message);
    }
}

const getDB = () => {
    if (!db) throw new Error('DB is not connected');
    return db;
}

module.exports = { connectDB, getDB }