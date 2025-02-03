const axios = require('axios');

module.exports = async (phrase) => {
    try {
        // Make a GET request to Google Books API
        const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
                format: 'json',
                q: phrase
            }
        });

        // Format the response into a structured object
        const formattedObj = {
            data: results.data,
            status: results.status,
            statusText: results.statusText,
            headers: results.headers,
            requestHeader: results.config.headers
        };

        // Return the formatted object as a JSON string
        return formattedObj; // Returning as an object, not JSON string.
        
    } catch (error) {
        // Handle any error in the request
        console.error('Error fetching books:', error);
        throw error; // Rethrow the error so the caller can handle it
    }
};
