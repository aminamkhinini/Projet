import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listProducts } from '../actions/productAction';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProductCard from '../components/ProductCard';

export default function SearchScreen(props) {
  const {
    
    category = 'all',
   
  } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(
      listProducts({
       
        category: category !== 'all' ? category : '',
        
        order,
      })
    );
  }, [category, dispatch,  order]);

  const getFilterUrl = (filter) => {
   
    const filterCategory = filter.category || category;
    
    return `/search/category/${filterCategory}`;
  };
  return (
 
     
      <div className="row top">
        <div className="col-1">
          <h3>Department</h3>
          <div>
            {loadingCategories ? (
              <Loader></Loader>
            ) : errorCategories ? (
              <Message variant="danger">{errorCategories}</Message>
            ) : (
              <ul>
                <li>
                  <Link
                    className={'all' === category ? 'active' : ''}
                    to={getFilterUrl({ category: 'all' })}
                  >
                    Any
                  </Link>
                </li>
                {categories.map((c) => (
                  <li key={c}>
                    <Link
                      className={c === category ? 'active' : ''}
                      to={getFilterUrl({ category: c })}
                    >
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        
              </div>
        
       
        </div>
    

  );
}