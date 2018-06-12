 var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    model:  String,
    size: String,
    base: {
        color: String,
        material: String
    },
    lid: {
        color: String,
        material: String
    },
    url: "",
    price: Number
  });
