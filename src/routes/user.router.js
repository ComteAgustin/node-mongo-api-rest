// Import and init Router
import {Router} from 'express'
const router = Router()

// Import Controllers
import * as userCtrl from '../controllers/user.controller'

// Endpoints
router.post('/', userCtrl.createUser)

router.get('/', userCtrl.getUsers)
router.get('/:userid', userCtrl.getUserById)

router.put('/:userid', userCtrl.updateUser)

router.delete('/:userid', userCtrl.deleteUser)


// Export router object
export default router