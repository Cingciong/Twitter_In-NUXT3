import { getUserByUsername } from "~/server/db/users"
import { ShowEveryOne } from "~/server/db/users"
import  bcrypt  from "bcrypt"
import { userTransformer} from "~/server/transformers/user"
import { createRefreshToken } from "~/server/db/refreshTokens"
import { sendRefreshToken } from "../../Utils/jwt"

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
    const user = await getUserByUsername(username)

    if(!user){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or Password is inavlid'
        }))
    }

    const users = await ShowEveryOne()

    //check password
    const deosThePasswordMatch = await bcrypt.compare(password, user.password)

    if (!deosThePasswordMatch){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or Password is inavlid'
        }))
    }

    //generate tokens 
    //access token
    //refresh token
    const { accessToken, refreshToken} = generateTokens(user)

    await createRefreshToken({
        userId: user.id,
        token: refreshToken
    })

    sendRefreshToken(event, refreshToken)

    return {
        user: userTransformer(user),
        accessToken: accessToken,
    }
})
