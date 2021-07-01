// Import Mongoose and config connection url
import mongoose from 'mongoose'
import config from './config'

// Mongoose connection
mongoose
    .connect(config.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })

// Show that the connection is ok
mongoose.connection.on('open', _ => console.log('DB is connected'))