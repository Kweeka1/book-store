const categories = [];

const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';

const categoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export const checkCategoryStatus = (category) => ({ type: CHECK_STATUS, payload: category });

export default categoriesReducer;
