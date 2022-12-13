import './categories.scss';
import { useDispatch, useSelector } from 'react-redux';
import { checkCategoryStatus } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  return (
    <div className="categories">
      <button type="button" onClick={() => dispatch(checkCategoryStatus())}>CHECK STATUS</button>
      <div className="categories-status">
        {status}
      </div>
    </div>
  );
};

export default Categories;
