import PropTypes from 'prop-types';
import {useForm} from "react-hook-form"

const ExpenseForm = ({addExpense}) => {

const { register, handleSubmit, reset, formState: {errors} } = useForm()


  return (
    <form 
      className="mb-5" 
      onSubmit={handleSubmit((data) => {
        addExpense(data);
        reset()
      })}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          type="text"
          className="form-control"
          {...register("description", {minLength:6, required:true})}
        />
        {errors.description?.type == "required" && <p>This field is required.</p> }
        {errors.description?.type == "minLength" && <p>This field requires atleast 6 characters.</p> }
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className="form-control"
          {...register("amount", {required:true})}
        />
        {errors.amount?.type == "required" && <p>This field is required.</p> }
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select 
          id="category" 
          className="form-select mb-3" 
          {...register("category", {required:true})}
        >
          <option value=""></option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Groceries">Groceries</option>
        </select>
        {errors.category?.type == "required" && <p>This field is required.</p> }
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

ExpenseForm.propTypes = {
  addExpense: PropTypes.func,
};
export default ExpenseForm;
