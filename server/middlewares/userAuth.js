import jwt from 'jsonwebtoken';

export const userAuth = (req, res, next) => {
    // RETRIEVE TOKEN FROM HEADER
    const token = req.header('Authorization')

    // CHECK IF THE TOKEN EXISTS
    if (!token) {
        return res.status(401).json({ message: 'Token not provided. Access denied.' })
    }

    try {
        // TOKEN VERIFICATION
        const decoded = jwt.verify(token, process.env.SECRET)

        // ADD USER INFORMATION TO THE REQUEST OBJECT
        req.user = decoded

        // CONTINUE TO THE NEXT ROUTE
        next()
    } catch (err) {
        res.status(401).json({ message: 'Invalid token. Access denied.' })
    }
}