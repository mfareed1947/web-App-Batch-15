const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect(`mongodb+srv://${process.env.Db_USERNAME}:${process.env.Db_PASSWORD}@cluster0.bu6srjt.mongodb.net/${process.env.Db_NAME}`)
}

module.exports = {
    connectDB
}