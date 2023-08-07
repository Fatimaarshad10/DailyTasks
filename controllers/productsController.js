
global.Products = [];
  // =======>createProducts<=======
const createProducts = async (req, res) => {   
    const { id , name, brand } = req.body;
    const newProducts = { id , name, brand };
    Products.push(newProducts);
    res.status(201).json(newProducts); 
  };

// =======>getProducts<=======
  const getProducts = async (req, res) => {   
    res.json(Products);
  };

// =======>deleteProducts<=======
const deleteProducts = async (req, res) => {   
    const { id } = req.params; 
    const index = Products.findIndex((Products) => Products.id === id);
    if (index !== -1) {
      const deletedProducts = Products.splice(index, 1)[0];
      res.json(deletedProducts);
    } else {
      res.status(404).json({ error: 'Products not found' });
  }
}
module.exports = {getProducts , createProducts , deleteProducts};
  