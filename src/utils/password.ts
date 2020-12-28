import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

export function hashPassword(password: string): Promise<string> {

    return new Promise<string>((resolve, reject) => {
        bcrypt.hash(password, SALT_ROUNDS, (err, encrypted) => {
            if(err) return reject(err)

            resolve(encrypted)
        })
    })

}

export function matchPassword(hash: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        bcrypt.compare(password, hash, (err, same) => {
            if (err) return(err)

            resolve(same)
        })
    })
}

/*
// Test

async function test() {
    // Create Password
    const pass = "asdgguihbipw"
    const hash = await hashPassword(pass)
    console.log(pass, hash)

    // Check Password
    const check1 = "asdgguihbipw"
    const matched1 = await  matchPassword(hash, check1)
    console.log("match1", matched1)

    // Check Password
    const check2 = "ghaifbgibdlijjv"
    const matched2 = await  matchPassword(hash, check2)
    console.log("match1", matched2)
}

test()

 */
