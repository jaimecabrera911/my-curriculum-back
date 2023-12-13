const {MongoClient, ServerApiVersion} = require('mongodb');
const {environments} = require("../envs/envs");


const {MONGODB_DB, MONGODB_HOST, MONGODB_PASSWORD, MONGODB_USER} = environments

const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_DB}?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ping: 1});
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
        return client;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

async function closeDatabaseConnection() {
    try {
        await client.close();
        console.log("Closed MongoDB connection!");
    } catch (error) {
        console.error("Error closing MongoDB connection:", error);
        throw error;
    }
}


run().catch(console.dir);

module.exports = {
    connectToDatabase,
    closeDatabaseConnection,
};