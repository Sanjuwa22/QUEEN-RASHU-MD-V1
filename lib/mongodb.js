const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_STICKER', value: 'true' },
    { key: 'AUTO_REPLY', value: 'true' },
    { key: 'ALLWAYS_OFFLINE', value: 'false' },
    { key: 'READ_MESSAGE', value: 'false' },
    { key: 'ANTI_LINK', value: 'false' },
    { key: 'ANTI_LINKK', value: 'false' },
    { key: 'AUTO_REACT', value: 'false' },
    { key: 'ANTI_BOT', value: 'false' },
    { key: 'ANTI_BAD', value: 'false' },
    { key: 'AUTO_STATUS_REPLY', value: 'false' },    
    { key: 'AUTO_STATUS__MSG', value: '`𝒀𝒐𝒖𝒓 𝑺𝒕𝒂𝒕𝒖𝒔 𝑱𝒖𝒔𝒕 𝑵𝒐𝒘 𝑺𝒆𝒆𝒏 𝑩𝒚 🌟⃝💗𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃ᥫ᭡🍒👑`' },
    { key: 'AUTO_TYPING', value: 'false' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
                                                      
