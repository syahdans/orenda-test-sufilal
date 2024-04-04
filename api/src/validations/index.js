const { body } = require("express-validator");

module.exports = {
    customer:{
        create:[
            body('name').notEmpty()
        ],
    }
}