var validator = require('validator')

let Miidlewares = {
    retailerSignUpDataValidate: (req, res, next) => {
        if (req.body.password && req.body.email && validator.isEmail(req.body.email)) {
            next()
        } else {
            res.status(400).json({ error: 'incorrect data' })
        }

    }
}

module.exports = Miidlewares