const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'CAcQRSgI#D6mJ1N3UYOV2eqUblOgforuRJ6LJYmA32lswP7psQZw', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb://mongo:TcJLZkZMuoSQQOrjIbDZYeaqESHaFhCu@mongodb.railway.internal:27017',// Enter Your MongoDB URL
    OWNER_NUMBER: process.env.OWNER_NUMBER || '94720244981',    // Enter Your Owner Number
};
