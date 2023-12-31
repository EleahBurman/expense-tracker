import PropTypes from 'prop-types';

const ExpenseList = ({items, deleteItem, categories}) => {
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
            <td>${item.amount.toFixed(2)}</td>
            <td>{item.category}</td>
            <td>
              <button 
                className="btn btn-outline-danger" 
                onClick={()=>deleteItem(item.id)}
              >Delete</button></td>
          </tr>
        )}

        <tr>
          <td><h3>Total</h3></td>
          <td><h3>${items.reduce((total, item) => total+item.amount,0).toFixed(2)}</h3></td>
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
      categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  deleteItem: PropTypes.func,
};
export default ExpenseList