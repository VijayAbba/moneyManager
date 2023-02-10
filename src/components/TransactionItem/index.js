// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {title, id, Amount, Type} = transactionDetails
  const textDisplay = Type === 'INCOME' ? 'Income' : 'Expenses'

  const onDelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p className="li-title">{title}</p>
      <p className="li-amount">Rs {Amount}</p>
      <p className="li-Income">{textDisplay}</p>
      <button
        data-testid="delete"
        type="button"
        onClick={onDelete}
        className="delete-button"
      >
        <img
          className="delete-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
