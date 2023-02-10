// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {IncomeValue, ExpensesValue, BalanceValue} = props

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
            Rs {BalanceValue}
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
            Rs {IncomeValue}
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
            Rs {ExpensesValue}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
