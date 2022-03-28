
import React, {Component} from 'react';
import { ExcelRenderer , OutTable } from 'react-excel-renderer';
import { sendExpense, getExpenseByDate } from '../actions/expense.action';
import {connect} from 'react-redux';
import './styles.scss';
import dayjs from 'dayjs';

// import TypingText from '../components/TypingText';

class ExpenseForm extends Component {

    constructor() {
        super();
        this.currentDate = dayjs().format('YYYY-MM-DD');
        this.totalAmount = 0;
    }

    state = {
        totalAmount: this.totalAmount,
        expenseType: '',
        amountSpent: 0,
        // dateOfPurchase: dayjs().format('YYYY-MM-DD')
        dateOfPurchase: new Date().toISOString().substr(0, 10)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    // fileHandler = (event) => {
    //     let fileObj = event.target.files[0];
    
    //     //just pass the fileObj as parameter
    //     ExcelRenderer(fileObj, (err, resp) => {
    //       if(err){
    //         console.log(err);            
    //       }
    //       else{
    //         this.setState({
    //           cols: resp.cols,
    //           rows: resp.rows
    //         });
    //       }
    //     });               
    
    // }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.sendExpense(this.state);
    }
    
    getSelectedDate = (e) => {
        // new Date(e.target.value).toISOString().substr(0, 10)
        // this.setState({
        //     [e.target.name]: dayjs(e.target.value).format('YYYY-MM-DD'),
        // });
        this.setState({
            [e.target.name]: new Date(e.target.value).toISOString()
        });    
    }

    componentDidMount() {
        this.props.getExpenseByDate(this.state.dateOfPurchase);
    }

    computeTotalAmount({data}) {
        if(data) {
            let total = 0;
            data.map((item) => {
                total = total + item.amount
            });
            console.log('this.amoount', total);

            return total;
        }
    }

    render() {

        return (
            <div className="expense-form-container">
                <h2>Total Amount: {this.computeTotalAmount(this.props.expense)}</h2>
                <form className="expense-form" onSubmit={this.handleSubmit}>
                    {/* <input type="datetime-local" value="2017-06-13T13:00" /> */}
                    <label htmlFor="birthday">Date of Expense:</label>
                    <input type="date" id="birthday" name="dateOfPurchase" value={this.state.dateOfPurchase.substr(0, 10)} onChange={this.getSelectedDate} />
                    <input type="text" placeholder="item" name="expenseType" className="expense-type" onChange={this.handleChange} value={this.state.expenseType} />
                    <input type="text" placeholder="amount" name="amountSpent" className="amount" onChange={this.handleChange} value={this.state.amountSpent} />
                    <input type="submit" value="Submit" />
                <table>
                    <thead>
                        <tr>
                            <td>Date:</td> 
                            <td>Amount:</td> 
                            <td>Item:</td> 
                        </tr>
                    </thead>
                    <tbody>
                            {
                               this.props.expense.data && this.props.expense.data.map((item, index) => {
                                    console.log('inse', this.totalAmount);
                                    this.totalAmount = this.totalAmount + item.amount;
                                    return (
                                        <tr key={index}>
                                            <td>{item.expense}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.date}</td>
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
                </form>
                {/* <form>
                    <input type="file" onChange={this.fileHandler} style={{"padding":"10px"}} />
                </form>
                {
                    this.props.expense && <p>{this.props.expense.msg}</p>
                }

                {
                    this.state.cols && <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
                } */}
            </div>
        )
    }
}

const mapState = ({ExpenseReducer}) => {
    return {
        expense: ExpenseReducer
    }
}

export default connect(mapState, {sendExpense, getExpenseByDate})(ExpenseForm);