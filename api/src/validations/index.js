const { body } = require("express-validator");

module.exports = {
    customer:{
        create:[
            body('name').notEmpty()
        ],
        update:[
            body('name').notEmpty()
        ],
    },
    product:{
        create:[
            body('name').notEmpty()
        ],
        update:[
            body('name').notEmpty()
        ],
    },
}