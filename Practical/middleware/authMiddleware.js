function authMiddleware(req, res, next) {
    const token = req.headers.authorization

    if (token === "admin123") {
        next()
    } else {
        res.status(403).send("403 Access Denied")
    }
}

module.exports = authMiddleware