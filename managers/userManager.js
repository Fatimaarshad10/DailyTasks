"use-strict";

const { httpsCodes } = require("../config/httpCode");
const { language } = require("../language/en/language");

const products = {
    id: 1,
    title: 'Product 1',
    price: 19.99,
    description: 'Description of Product 1'
  }

  module.exports.getUser = async () => {
    try {
      const result = {
        status: httpsCodes.SUCCESS_CODE,
        message: language.RECORD_FOUND,
        result: products,
      };
      return result;
    } catch (error) {
      throw error;
    }
  };