var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var productSchema = mongoose.Schema({
  teamOne: String,
  teamTwo: String,
  date: String,
  city: String,
});
var Product = mongoose.model("Product", productSchema);

function validateProduct(data) {
  const schema = Joi.object({
    teamOne: Joi.string().min(0).max(100).required(),
    teamTwo: Joi.string().min(0).max(100).required(),
    date: Joi.date().required(),
    city: Joi.string().min(3).max(12).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Product = Product;
module.exports.validate = validateProduct;
