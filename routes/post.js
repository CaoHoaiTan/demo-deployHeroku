const express = require('express');
const router = express.Router();
const postController = require('../controllers/PostController');

router.get('/:id', postController.detail);
router.get('/', postController.create);
router.get('/:id/edit', postController.edit);
router.post('/', postController.postBlog);
router.post('/:id/comment', postController.addComment);
router.put('/:id', postController.update);
router.delete('/:id', postController.delete);

module.exports = router;