const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=y7RBiTrD#ZUzcHGFTu9xZzsztJBCQaXJa2xBgUrA9-i-Ccm1eUZk",
MONGODB: process.env.MONGODB || "mongodb+srv://Induwagaming:<db_9y*Mf9txfZAf4>@cluster0.ueok3.mongodb.net/",
};
