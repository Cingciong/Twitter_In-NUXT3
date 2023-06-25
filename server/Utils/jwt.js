import jwt from "jsonwebtoken"

const generateAccesToken = (user) => {
    const config = useRuntimeConfig()

    return jwt.sign({userId: user.id}, config.jwtAccessSecret, {
        expiresIn: '10m'})
}

const generateRefreshToken = (user) => {
    const config = useRuntimeConfig()

    return jwt.sign({userId: user.id}, config.jwtRefreshSecret, {
        expiresIn: '4h'})
}

export const generateTokens = (user) => {
    const accessToken = generateAccesToken(user);
    const refreshToken = generateRefreshToken(user);



    return {
        accessToken: accessToken,
        refreshToken: refreshToken,
    }
}

export const sendRefreshToken = (event, token) => {
    setCookie(event, "refresh_token", token, {
        httpOnly: true,
        sameSite: true
    })
}