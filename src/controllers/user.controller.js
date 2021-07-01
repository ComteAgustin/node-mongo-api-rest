// Import Models
import User from '../models/user'

// Controllers
export const createUser = async(req, res) => { 
    try {
        // Receive data from the client
        const {username, email, password} = req.body
        
        // Creating a new user object with received data 
        const user = new User({
            username,
            email,
            password
        })

        // Encrypting password
        user.password = await User.encryptPassword(user.password)

        // Uploading the object user to the DB
        const savedUser = await user.save()

        // Return status with a user created in a json 
        return res.status(201).json(savedUser)
    } 
    // Handle errors
    catch (err) {
        res.status(400).json({message: "the data sent not is correct data type"})
    }
}

export const getUsers = async (req, res) => {
    // Getting users from DB
    const users = await User.find()
    // Return Users to client
    return res.status(200).json(users)
}

export const getUserById = async (req, res) => {
    // Getting user id from the request params
    const {userid} = req.params
    // Getting the user data with the id
    const user = await User.findById(userid)

    // Handle the case that the id doesnt found a user
    if(!user) res.status(404).json({message: 'User not founded'})

    // Return the user
    return res.status(200).json(user)
}

export const updateUser = async (req, res) => {
    // Finding the user with id, and modify his user with the data that be in the request
    const user = await User.findByIdAndUpdate(req.params.userid, req.body, {new: true})

    // Handle the case that the id doesnt found a user 
    if(!user) res.status(404).json({message: 'User not founded'})

    // Return the status code 201, and the modify user
    return res.status(201).json(user)
}

export const deleteUser = async (req, res) => {
    // Finding user with id, and delete this user
    const user = await User.findOneAndDelete(req.params.userid)
    
     // Handle the case that the id doesnt found a user
    if(!user) res.status(400).json({message: 'user not founded'})

    // Return the code 204, indicating that this was created
    return res.status(204).json()
}
