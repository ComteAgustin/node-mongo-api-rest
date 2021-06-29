// Import Mongoose and config connection uri
import mongoose from 'mongoose'
import config from './config'

// Mongoose connection
mongoose
    .connect(config.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })

mongoose.connection.on('open', _ => console.log('DB is connected'))