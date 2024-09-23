import express from 'express'
import userController from './controller/userController.js'

const router = express.Router()



// Rota para adicionar um novo usuário
router.post('/user', userController.addUser)

router.get('/user/:id', userController.showUser)

router.get('/user',userController.showAll)

router.put('/user/:id',userController.updateUser)

router.delete('/user/:id',userController.deleteUser)

// Rota simples para testar
router.get('/', (req, res) => {
    res.send('Hello World');
})

export default router