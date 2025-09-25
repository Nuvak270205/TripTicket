const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const db = require('./config/db');
const route = require('./route');

// Cau hinh middleware cho phan body
app.use(methodOverride('_method'));
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to DB
db.connectDB();

// Routes
route(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});