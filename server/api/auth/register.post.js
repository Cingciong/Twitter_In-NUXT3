import { sendError } from "h3"
import {createUser} from "../../db/users.js"


export default defineEventHandler(async (event) => {

    const body = await readBody(event)

    const {username, password, repeatpassword, email, name} = body

    if (!username || !email || !password || !repeatpassword || !name) {
        return sendError(event, createError({statusCode: 400, statusMessage: 'Invalid params' }))
    }

    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

    if(!regexExp.test(email)){
        return sendError(event, createError({statusCode: 400, statusMessage: 'Invalid email' }))
    }

    if(password != repeatpassword){
        return sendError(event, createError({statusCode: 400, statusMessage: 'Password mismatch' }))
    }

    const userData = {
        username,
        email,
        password,
        name
    }

    const user = await createUser(userData)

    return {
        body: user
    }
})