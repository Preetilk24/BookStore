const axios = require('axios');

async function testAPI() {
    try {
        console.log('Testing server...');
        
        // Test basic connection
        const testResponse = await axios.get('http://localhost:5000/test');
        console.log('Test endpoint response:', testResponse.data);

        // Test books endpoint
        const booksResponse = await axios.get('http://localhost:5000/api/books');
        console.log('Books endpoint response:', booksResponse.data);

    } catch (error) {
        console.error('Error details:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
        });
    }
}

testAPI(); 