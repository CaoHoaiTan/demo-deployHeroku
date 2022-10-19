const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const moment = require('moment');

const app = express();

// Somewhere near the top
app.use(express.static('public'));
// app.use("/post/:id", express.static('public'));

//require routes/index.js
const routes = require('./routes');

//convert Post to PUT method
const methodOverride = require('method-override');

//handle form data of method post html
app.use(
    express.urlencoded({
        extended: true,
    }),
);
//handle send data xmlhttp, fetch, axios,...
app.use(express.json());

app.use(methodOverride('_method'));
// app.use(express.static(path.join(__dirname, 'public')));
// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: 'main',
        helpers: {
            moment: function (date) {
                return moment(date).format("MMMM Do YYYY");
            },
            fromnow: function (date) {
                return moment(date).startOf('minutes').fromNow();
            }
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

//Route init
routes(app);

// 127.0.0.1 - localhost
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App listening on port ${port}`);
});
