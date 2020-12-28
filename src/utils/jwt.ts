import jwt from 'jsonwebtoken'
import {User} from "../entities/User";

// TODO: move to config file
const JWT_SECRET = "some-very-very-strong-string-no-one-can-guess"

export async function sign(user: User): Promise<string> {
    return new Promise(((resolve, reject) => {
        jwt.sign({
            username: user.username,
            email: user.email
        }, JWT_SECRET, (err: any , encoded: string | undefined) => {
            if(err) return reject(err)
            else resolve(encoded as string)
        })
    }))
}

export async function decode(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
        jwt.verify(token, JWT_SECRET, (err, decoded: object | undefined) => {
            if(err) return reject(err)
            else return resolve(decoded)
        })
    })
}

/*
// For testing

async function run() {
    const token = await sign({email: 'aryankumar1504@gmail.com', username: 'aryan'})
    console.log('token =>', token)

    const decoded = await decode(token)

    console.log(decoded)
}

run()

 */