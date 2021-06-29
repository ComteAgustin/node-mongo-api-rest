// Import Mongoose
import {Schema, model} from 'mongoose'

// Schema 
const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    }}, {
        timeStamp: true,
        versionKey: false
    })

// Export 
export default model('user', userSchema)