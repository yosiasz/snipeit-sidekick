const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    snipeit: {
        token:  process.env.TOKEN,
        hostname:  process.env.HOST,
        port:  process.env.PORT,
        api_path:  process.env.API_PATH        
    }
};  