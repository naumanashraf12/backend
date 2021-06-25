const express = require("express");
let router = express.Router();
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
const validateProduct = require("../../middlewares/validateProduct");
var { Product } = require("../../models/product");
//get products
router.get("/", async (req, res) => {
  let products = await Product.find();
  return res.send(products);
});

router.get("/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(product); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record

//update a record

//Insert a record
router.post("/", validateProduct, async (req, res) => {
  let product = new Product();
  product.teamOne = req.body.teamOne;
  product.teamTwo = req.body.teamTwo;
  product.date = req.body.date;
  product.city = req.body.city;
  await product.save();
  return res.send(product);
});
module.exports = router;
