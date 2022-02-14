import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Pagination from '../../components/Pagination';

import ProductCard from '../../components/ProductCard';
import { addToBasket } from '../../redux/actions/basketActions';

import {
  fetchProducts,
  setCurrentPage,
} from '../../redux/actions/productsActions';

import './index.css';

const ProductsContainer = ({
  dispatch,
  products,
  items,
  selectedColor,
  selectedBrand,
  selectedSortingType,
  searchText,
  page,
}) => {
  useEffect(() => {
    dispatch(
      fetchProducts(
        selectedColor,
        selectedBrand,
        selectedSortingType,
        searchText,
        page,
      ),
    );
  }, [
    dispatch,
    searchText,
    selectedBrand,
    selectedColor,
    selectedSortingType,
    page,
  ]);

  const handleAddBasket = item => {
    dispatch(addToBasket(item));
  };

  const handlePageChange = page => {
    dispatch(setCurrentPage(page - 1));
  };

  return (
    <>
      <div className='product-container'>
        {products &&
          products.map(product => (
            <ProductCard
              disabled={items.some(s => s.id === product.id)}
              key={product.id}
              product={product}
              onAddToBasket={handleAddBasket}
            />
          ))}
      </div>
      <div className='pagination-container'>
        <Pagination
          dataLength={products ? products.length : 0}
          pageLimit={3}
          dataLimit={12}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const mapStateToProps = state => ({
  products: state.products.products,
  page: state.products.page,
  items: state.basket.items,
  selectedColor: state.filters.selectedColor,
  selectedBrand: state.filters.selectedBrand,
  selectedSortingType: state.filters.selectedSortingType,
  searchText: state.search.text,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(ProductsContainer);
