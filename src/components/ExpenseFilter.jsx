import PropTypes from 'prop-types';

const ExpenseFilter = ({filterItem, categories}) => {
  return (
    <select name="" id="" className="form-select mb-3" onChange={(event) => filterItem(event.target.value)}>
      <option value="">Select An Option Here</option>
        {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
        ))}
    </select>
  )
}

ExpenseFilter.propTypes = {
  filterItem: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ExpenseFilter