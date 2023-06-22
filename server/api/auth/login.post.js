import { getUserByUsername } from "~/server/db/users"

export default defineEventHandler(async(event) => {
    const body = await readBody(event)

    const { username, password } = body

    if(!username || !password){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'invalid params'
        }))
    }

    //is registered
    const user =await getUserByUsername(username)

    if(!user){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or Password is inavlid'
        }))
    }


    //check password

    //generate tokens 
    return {
        user: user
    }
})