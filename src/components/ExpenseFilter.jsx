import PropTypes from 'prop-types';

const ExpenseFilter = ({filterItem}) => {
  return (
    <select name="" id="" className="form-select mb-3" onChange={(event) => filterItem(event.target.value)}>
      <option value="">Select An Option Here</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Groceries">Groceries</option>
    </select>
  )
}

ExpenseFilter.propTypes = {
  filterItem: PropTypes.func.isRequired
}

export default ExpenseFilter