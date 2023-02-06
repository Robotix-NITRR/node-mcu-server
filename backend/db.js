const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    }
    catch(e) {
        console.log(`Error: ${e.message}`);
        process.exit();
    }
}

module.exports = connectDB;