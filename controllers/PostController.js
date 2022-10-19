const { Post, listPosts } = require('../models/Post');
const { Comment, listComments } = require('../models/Comment');
const { post } = require('../routes/post');

class PostController {
    // [GET] /home
    detail(req, res, next) {
        const id = req.params.id;
        const commentsInPost = [];
        listComments.forEach(comment => {
            if (comment.postID.toString() === id.toString())
                commentsInPost.push(comment);
        });
        const commentNumber = commentsInPost.length;
        const blog = listPosts.find((obj => obj.id.toString() == id.toString()));
        res.render('post/detail', { blog, commentNumber, commentsInPost });
    }

    // /[Get] create a new post
    create(req, res, next) {
        res.render('post/create');
    }

    // [Get] get edit a post
    edit(req, res, next) {
        const id = req.params.id;
        const blog = listPosts.find(blog => blog.id.toString() === id.toString());
        res.render('post/edit', { blog });
    }

    // [Post] 
    postBlog(req, res, next) {
        const formData = req.body;
        const newPost = new Post(formData.title, formData.content);
        listPosts.push(newPost);
        res.redirect("/");
    }

    update(req, res, next) {
        const id = req.params.id;
        //Find index of specific object using findIndex method.    
        const objIndex = listPosts.findIndex((obj => obj.id.toString() == id.toString()));
        //Update object's name property.
        listPosts[objIndex].title = req.body.title;
        listPosts[objIndex].content = req.body.content;
        listPosts[objIndex].date = Date.now();
        res.redirect("/");
    }

    delete(req, res, next) {
        const id = req.params.id;
        const objIndex = listPosts.findIndex((obj => obj.id.toString() == id.toString()));
        listPosts.splice(objIndex, 1);
        res.redirect("/");
    }

    //comments
    addComment(req, res, next) {
        const postID = req.params.id;
        const newComment = new Comment(req.body.author, req.body.content, postID);
        listComments.push(newComment);
        // console.log(listComments);
        res.redirect(`/post/${postID}`);
    }
}

module.exports = new PostController();