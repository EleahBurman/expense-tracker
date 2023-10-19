import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryForm = ({ addCategory }) => {
  const [newCategory, setNewCategory] = useState('');

  const handleCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCategory.trim() !== '') {
      addCategory(newCategory);
      setNewCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="newCategory" className="form-label">
          New Category
        </label>
        <input
          id="newCategory"
          type="text"
          className="form-control"
          value={newCategory}
          onChange={handleCategoryChange}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Add Category
      </button>
    </form>
  );
};

CategoryForm.propTypes = {
  addCategory: PropTypes.func.isRequired,
};

export default CategoryForm;
