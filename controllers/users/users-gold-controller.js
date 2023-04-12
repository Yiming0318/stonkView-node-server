import * as dao from './users-gold-dao.js';
const GoldUserController = (app) => {
    const createUser = async (req, res) => {
        const user = req.body
        const actualUser = await dao.createUser(user)
        res.json(actualUser)
    }

    const findAllUsers = async (req, res) => {
        const allUsers = await dao.findAllUsers()
        res.send(allUsers);
    }

    const deleteUser = async (req, res) => {
        const uid = req.params.uid
        const status = await dao.deleteUser(uid)
        res.json(status)
    }

    const updateUser = async (req, res) => {
        const updates = req.body
        const status = await dao.updateUser(updates)
        res.json(status)
    }

    const register = async (req, res) => {
        const user = req.body
        const existingUser = await dao.findByUsername(user.username)
        if (existingUser) {
            res.sendStatus(403)
            return
        }
        const currentUser = await dao.createUser(user)
        req.session['currentUser'] = currentUser
        res.json(currentUser)
    }


    app.post('/users/gold', createUser)
    app.get('/users/gold', findAllUsers)
    app.delete('/users/gold/:uid', deleteUser)
    app.put('/users/gold', updateUser)
    app.post('/gold-register', register)
}

export default GoldUserController