const { Post, listPosts } = require('../models/Post');
const { Comment, listComments } = require('../models/Comment');

class HomeController {
    // [GET] /home
    index(req, res, next) {
        listPosts.forEach(post => {
            post.commentNumber = listComments.filter(function (item) {
                if (item.postID.toString() === post.id.toString()) {
                    return true;
                } else {
                    return false;
                }
            }).length;
        });
        res.render('home', { listPosts });
    }

}

module.exports = new HomeController();