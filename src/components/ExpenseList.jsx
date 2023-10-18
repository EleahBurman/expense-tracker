import PropTypes from 'prop-types';
const ExpenseList = ({items}) => {
  return (

      <table className="table">
    <thead>
      <tr>

        <th scope="col">Description</th>
        <th scope="col">Amount</th>
        <th scope="col">Category</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item)=>       
        <tr  key={item.id}>
          <td>{item.description}</td>
          <td>{item.amount}</td>
          <td>{item.category}</td>
        </tr>
      )}

      <tr>
        <td><h3>Total</h3></td>
        <td><h3>$300</h3></td>
      </tr>


      </tbody>
    </table>
  )
}

ExpenseList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ExpenseList