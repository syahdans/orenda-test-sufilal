const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');

// router
//     .route('/')
//     .get(authorize(ADMIN), validate(listUsers), controller.list)
//     .post(authorize(ADMIN), validate(createUser), controller.create);

// router
//     .route('/profile')
//     .get(authorize(), controller.loggedIn);

// router
//     .route('/:userId')
//     .get(authorize(LOGGED_USER), controller.get)
//     .put(authorize(LOGGED_USER), validate(replaceUser), controller.replace)
//     .patch(authorize(LOGGED_USER), validate(updateUser), controller.update)
//     .delete(authorize(LOGGED_USER), controller.remove);

// Define routes
router.get('/', controller.list);

router.get('/:id', controller.get);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.remove);

module.exports = router;