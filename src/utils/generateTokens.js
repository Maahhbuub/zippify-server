import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const generateAccessToken = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
    });
};

const generateRefreshToken = (id) => {
    return jwt.sign({ id, jti: crypto.randomUUID() }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
    });
};

export { generateAccessToken, generateRefreshToken };