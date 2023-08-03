const Products = require("../models/productSchema");
// Get all products 
const All_products = async (req, res) => {   
  try {
    const product = await Products.find({});
    res.status(201).json(product);
   
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};
// add the products 
const Add_products = async (req,res)=>{
  try {
    const { id, title, description } = req.body;
    // Create a new product object using the Products model
    const newProduct = new Products({
      id,
      title,
      description,
    });
    // Save the new product to the database
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add product' });
  }
};
// delete the products 
const Delete_products = async (req , res)=>{
  try {
    const productId = req.params.id;

    // Find the product by its ID and remove it from the database
    const deletedProduct = await Products.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
};
// update the products 
const Update_product = async(req,res)=>{
  try {
    const productId = req.params.id;
    const { title, description } = req.body;

    // Find the product by its ID and update it in the database
    const updatedProduct = await Products.findByIdAndUpdate(
      productId,
      { title, description },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
}
    
   
module.exports = {
  All_products , Add_products , Delete_products ,Update_product
  };

   