// Import express initialization as a app
import app from './app'
// Import Database Connection
import './database'

// Listen a port
app.listen(app.get('port'), () => {
   console.log("Listen on port", app.get('port')) 
})