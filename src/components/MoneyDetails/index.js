// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props

  const sumOfAllIncomeTransaction = () => {
    const listOfAmount = moneyDetails.map(eachItem => {
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

  const sumOfAllExpensesTransaction = () => {
    const listOfAmount = moneyDetails.map(eachItem => {
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

  const yourBalance =
    sumOfAllIncomeTransaction() - sumOfAllExpensesTransaction()

  return (
    <div className="money-details-container">
      <div className="you-card  you-balance-card">
        <img
          className="you-balance-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="tex-card">
          <p>Your Balance</p>
          <p className="rupees" data-testid="balanceAmount">
            Rs {yourBalance}
          </p>
        </div>
      </div>
      <div className="you-card  you-Income-card">
        <img
          className="you-balance-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="tex-card">
          <p>Your Income</p>
          <p className="rupees" data-testid="incomeAmount">
            Rs {sumOfAllIncomeTransaction()}
          </p>
        </div>
      </div>
      <div className="you-card  you-Expenses-card">
        <img
          className="you-balance-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="tex-card">
          <p>Your Expenses</p>
          <p className="rupees" data-testid="expensesAmount">
            Rs {sumOfAllExpensesTransaction()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
