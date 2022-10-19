const moment = require('moment');

function Post(title, content) {
    this.id = Date.now();  // Accept name and age in the constructor
    this.title = title || null;
    this.content = content || null;
    this.date = Date.now();
}

Post.prototype.getId = function () {
    return this.id;
}

Post.prototype.getTitle = function () {
    return this.title;
}

Post.prototype.getDate = function () {
    return moment(this.date).format("mmm do yy");
}

Post.prototype.setDate = function (date) {
    return this.date = date;
}

Post.prototype.setTitle = function (title) {
    this.title = title;
}

Post.prototype.getContent = function () {
    return this.content;
}

Post.prototype.setContent = function (content) {
    this.content = content;
}

Post.prototype.equals = function (otherPost) {
    return otherPost.getId() === this.getId()
        && otherPost.getTitle() == this.getTitle()
        && otherPost.getContent() == this.getContent();
}

Post.prototype.fill = function (newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

const listPosts = [];
module.exports = { Post, listPosts };   
