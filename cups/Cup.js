var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//creates collection
const db = mongoose.connect('mongodb://localhost/cupcup')

//creates schema
var cupSchema = new Schema({
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

//creates model
const Cup = mongoose.model('Cup', cupSchema)



const exampleCup = new Cup ({model: 'SuperBlue'})

exampleCup.save()


//exports the model
module.exports = Cup
