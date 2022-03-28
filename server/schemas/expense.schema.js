
var mongoose = require('mongoose');

let ExpenseSchemaObject = new mongoose.Schema(
    {
        id: String,
        amount: Number,
        expense: String,
        date: { type: Date, index: true },
        createdAt: Number,
        updatedAt: Number
    },
    {
        collection: 'expenses',
        timestamps: { currentTime: ()=> Date.now() },
    }
);

var ExpenseModel = mongoose.model('ExpenseModel', ExpenseSchemaObject);

module.exports = ExpenseModel;