
function Comment(author, content, postID) {
    this.id = Date.now();  // Accept name and age in the constructor
    this.author = author || null;
    this.content = content || null;
    this.postID = postID || null;
    this.date = Date.now();
}

const listComments = [];
module.exports = { Comment, listComments };   