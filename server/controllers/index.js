// const Users = require('../../schema/user.schema');
const ExpenseModel = require('../schemas/expense.schema');

/**
 * fetches all the documents(data) from users collection
 */
const ExpenseController = {
  getAll: async (req, res) => {
    const date = req.query.date;
    const queryConstraints = {};

    let result;

    if(date && req.query.endDate) {
      const filteredExpenses = await ExpenseModel.find({ 
          date: {
            $gte: new Date(req.query.date),
            $lte: new Date(req.query.endDate)
          }
        });
      
        result = filteredExpenses;
    } else if(date) {
      queryConstraints.date = date;
      result = await ExpenseModel.find(queryConstraints);
    } else {
      result = await ExpenseModel.find({});
    }
    res.send({success: true, result});
  },

  saveExpense: async (req, res) => {
    let data = req.body;

    const expenseInstance = new ExpenseModel(data);

    if(data.length > 0) {
      console.log('insert many');

      ExpenseModel.insertMany(data, function(error, docs) {
        console.log('dsoc', docs);
        res.status(200).send({
          success: true,
          msg: 'New Expense Record has been created'
        })
      });

      // expenseInstance.insertMany(data).then((res) => {
      //   console.log('created many', res);
      // })
    } else {
      console.log('insert one');
      expenseInstance.save((err) => {
        if(err) {
          res.send(err);
        } else {
          res.status(200).send({
            success: true,
            msg: 'New Expense Record has been created'
          })
        }
      });
    }

  }

//   getById: async (req, res) => {
//     let result = await Users.find({userName: req.params.username});

//     res.send(result);
//   },
};

module.exports = ExpenseController;