import {Router} from "express";
import {createUser, loginUser} from "../controllers/users";

const route = Router();


// Post /users/login            Login
route.post('/login', async (req, res) => {
    try {
        const user = await loginUser((req.body.user))
        return res.status(200).json({user})

    } catch(e) {
        return res.status(422).json ({
            error: {body:['login failed', e.message]}
        })
    }
})

// Post /users                  Register a new user
route.post('/', async (req, res) => {
    try {
        const user = await createUser(req.body.user)
        return res.status(201).json(user)
    } catch (e) {
        console.error(e)
        return res.status(422).json({
            errors: {
                body: ['could not create user', e.message]
            }
        })
    }
})

export const usersRoute = route