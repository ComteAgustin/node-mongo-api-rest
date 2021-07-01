// Import Mongoose and Bcrypt
import {Schema, model} from 'mongoose'
import bcrypt from 'bcrypt'

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
    
    // Method for encrypt password
    userSchema.statics.encryptPassword = async password => {
        const salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(password, salt)
    }

    // Method for compare two passwords
    userSchema.statics.comparePassword = async (password, receivePassword) => {
        return await bcrypt.compare(password, receivedPassword)
    }

// Export 
export default model('user', userSchema)