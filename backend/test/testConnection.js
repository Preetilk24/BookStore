const mongoose = require('mongoose');
require('dotenv').config();

async function testConnection() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Successfully connected to MongoDB!');
        
        // Get list of collections
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log('Available collections:');
        collections.forEach(collection => {
            console.log(` - ${collection.name}`);
        });

    } catch (error) {
        console.error('Connection error:', error);
    } finally {
        await mongoose.connection.close();
        console.log('Connection closed.');
    }
}

testConnection(); 