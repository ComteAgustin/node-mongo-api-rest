// Import Express & dependecies
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

import pkg from '../package.json'

// Import Routes
import user from './routes/user.router'

// Initializating express
const app = express()

// Settings
app.set('port', process.env.PORT || 3000)
app.set('pkg', pkg)

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use(cors())
app.use(helmet())

// Welcome Route
app.get('/', (req, res) => {
    res.json({
        "messagge": "Welcome to my api rest",
        "name": app.get('pkg').name,
        "version": app.get('pkg').version,
        "description": app.get('pkg').description,
        "author": app.get('pkg').author
    })
})

// Routes
app.use('/api/user', user)

// Export app
export default app