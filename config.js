const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || '62oSGK5T#Uj8W3V9xitQl2qBoJHD8gSWI0DIed0XCvsDjB2NFy_Y', // Enter Your Session ID
    MONGODB: process.env.MONGODB || '',// Enter Your MongoDB URL
    OWNER_NUMBER: process.env.OWNER_NUMBER || '94728896048',    // Enter Your Owner Number
};
