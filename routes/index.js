const postRouter = require('./post');
const homeRouter = require('./home');

function route(app) {
    // route
    app.use('/post', postRouter);
    app.use('/', homeRouter);
}

module.exports = route;