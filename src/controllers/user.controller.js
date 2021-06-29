// Import Models
import User from '../models/user'

// Controllers
export const createUser = async(req, res) => { 
    try {
        const {username, email, password} = req.body
        
        const user = new User({
            username,
            email,
            password
        })

        const savedUser = await user.save()

        return res.status(200).json({
            _id: savedUser._id,
            username: savedUser.username,
            email: savedUser.email,
            password: savedUser.password
    })
    } catch (err) {
        res.json({err})
    }
}

export const getUsers = async (req, res) => {
    const users = await User.find()
    return res.status(200).json(users)
}

export const getUserById = async (req, res) => {
    const {userid} = req.params
    const user = await User.findById(userid)

    if(!user) res.status(404).json({message: 'User not founded'})

    return res.status(200).json(user)
}

export const updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.userid, req.body, {new: true})

    if(!user) res.status(404).json({message: 'User not founded'})

    return res.status(200).json(user)
}

export const deleteUser = async (req, res) => {
    const user = await User.findOneAndDelete(req.params.userid)
    
    if(!user) res.status(400).json({message: 'user not founded'})

    return res.status(204).json()
}
