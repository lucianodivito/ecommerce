const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const productsRoutes = require('./routes/products.routes');

const port = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(productsRoutes);

// Listen server
app.listen(port, () => {
    console.log(`Server up on port ${port}`)
});