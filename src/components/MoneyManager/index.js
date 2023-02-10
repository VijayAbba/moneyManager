import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    Amount: '',
    Type: transactionTypeOptions[0].optionId,
    transaction: [],
  }

  OnChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  OnChangeAmount = event => {
    this.setState({Amount: event.target.value})
  }

  OnChangeType = event => {
    this.setState({Type: event.target.value})
  }

  onDeleteTransaction = id => {
    this.setState(preValue => ({
      transaction: preValue.transaction.filter(eachItem => eachItem.id !== id),
    }))
  }

  sumOfAllIncomeTransaction = actions => {
    const listOfAmount = actions.map(eachItem => {
      if (eachItem.Type === 'INCOME') {
        return eachItem.Amount
      }
      return 0
    })

    const sumWithInitial = listOfAmount.reduce(
      (Accumulator, CurrentValue) => Accumulator + parseInt(CurrentValue),
      0,
    )
    return sumWithInitial
  }

  sumOfAllExpensesTransaction = actions => {
    const listOfAmount = actions.map(eachItem => {
      if (eachItem.Type === 'EXPENSES') {
        return eachItem.Amount
      }
      return 0
    })

    const sumWithInitial = listOfAmount.reduce(
      (Accumulator, CurrentValue) => Accumulator + parseInt(CurrentValue),
      0,
    )
    return sumWithInitial
  }

  newTransactionAdd = () => {
    const {title, Amount, Type, transaction} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      Amount,
      Type,
      transaction,
    }

    this.setState(preState => ({
      transaction: [...preState.transaction, newTransaction],
      title: '',
      Amount: '',
      Type: 'INCOME',
    }))
  }

  onAddTransaction = () => {
    const {title, Amount, Type, transaction} = this.state

    if (title !== '' && Amount !== '') {
      if (Type === 'EXPENSES') {
        const totalBalance =
          this.sumOfAllIncomeTransaction(transaction) -
          this.sumOfAllExpensesTransaction(transaction)
        if (totalBalance >= Amount) {
          this.newTransactionAdd()
        }
      } else {
        this.newTransactionAdd()
      }
    }
  }

  render() {
    const {title, Amount, Type, transaction} = this.state
    console.log(title, Amount, Type)

    return (
      <div className="bg-container">
        <p>.</p>
        <div className="welcome-card">
          <h1>Hi, Richard</h1>
          <p>Welcome back to your Money Manager</p>
        </div>

        <MoneyDetails moneyDetails={transaction} />

        <div className="transaction-history-container">
          <form className="add-transaction-card">
            <h1>Add Transaction</h1>
            <div className="input-card">
              <label htmlFor="title">TITLE</label>
              <input
                onChange={this.OnChangeTitle}
                id="title"
                type="text"
                placeholder="TITLE"
                value={title}
              />
            </div>
            <div className="input-card">
              <label htmlFor="amount">AMOUNT</label>
              <input
                onChange={this.OnChangeAmount}
                id="amount"
                type="text"
                placeholder="AMOUNT"
                value={Amount}
              />
            </div>
            <div className="input-card">
              <label htmlFor="selectinput">TYPE</label>
              <select
                onChange={this.OnChangeType}
                id="selectinput"
                className="select-input"
                defaultValue="INCOME"
              >
                <option
                  key={transactionTypeOptions[0].optionId}
                  value={transactionTypeOptions[0].optionId}
                >
                  {transactionTypeOptions[0].displayText}
                </option>
                <option
                  key={transactionTypeOptions[1].optionId}
                  value={transactionTypeOptions[1].optionId}
                >
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
            </div>
            <button
              onClick={this.onAddTransaction}
              className="Add-button"
              type="button"
            >
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="history-main-heading">History</h1>
            <div className="history-headings-card">
              <p className="history-heading">Title</p>
              <p className="history-heading">Amount</p>
              <p className="history-heading">Type</p>
            </div>
            <ul>
              {transaction.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  transactionDetails={eachItem}
                  onDeleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
