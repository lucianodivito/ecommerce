const connection = require('../db/db');

// Show all product list



const getAllProducts = (req, res) => {
    connection.query('SELECT * FROM products', (error, results) => {
        if(error) throw error;
        res.send(results);
    });
}

// Show only a single product

const getSingleProduct = (req, res) => {
    connection.query('SELECT * FROM products WHERE id = ?', 
    [req.params.id], (error, results) => {
        if(error) throw error;
        res.send(results);
    });
}

// Update product

const updateProduct = (req, res) => {
    let id = req.params.id,
        img = req.body.img,
        name = req.body.name,
        price = req.body.price;
        
    connection.query('UPDATE products SET img = ?, name = ?, price = ? WHERE id = ?', 
    [img, name, price, id], (error, results) => {
        if(error) throw error;
        res.send(results);
    });
}

// Delete product

const deleteProduct = (req, res) => {
    connection.query('DELETE FROM products WHERE id = ?', 
    [req.params.id], (error, results) => {
        if(error) throw error;
        res.send(results);
    });    
}


module.exports = {
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
}