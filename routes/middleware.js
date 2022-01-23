let isLoggedIn = (req, res, next) => {

    res.status(401).json({ message: 'Unauthorized' })
    next();
}
let isLoggedIn1 = (req, res, next) => {

    res.status(400).json({ message: 'bad request' })
    next();
}

module.exports = { isLoggedIn, isLoggedIn1 }