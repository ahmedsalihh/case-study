import { connect } from 'react-redux';
import { compose } from 'redux';

import FilterComponent from '../../components/FilterComponent';
import SortComponent from '../../components/SortComponent';
import {
  selSelectedSortingType,
  setSelectedBrand,
  setSelectedColor,
} from '../../redux/actions/filterActions';

import { sortingTypes } from '../../utils/constants';

import './index.css';

const Sidebar = ({
  dispatch,
  colorFilters,
  brandFilters,
  selectedColor,
  selectedBrand,
  selectedSortingType,
}) => {
  const onSelectColor = item => {
    dispatch(setSelectedColor(item));
  };

  const onSelectBrand = item => {
    dispatch(setSelectedBrand(item));
  };

  const onSelectSortingType = item => {
    dispatch(selSelectedSortingType(item));
  };

  return (
    <div className='sidebar'>
      <FilterComponent
        title='Renk'
        filters={colorFilters}
        selectedItem={selectedColor}
        setSelectedItem={onSelectColor}
      />
      <SortComponent
        title='Sıralama'
        sotingTypes={sortingTypes}
        selectedItem={selectedSortingType}
        setSelectedItem={onSelectSortingType}
      />
      <FilterComponent
        title='Marka'
        filters={brandFilters}
        selectedItem={selectedBrand}
        setSelectedItem={onSelectBrand}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const mapStateToProps = state => ({
  colorFilters: state.products.colorFilters,
  brandFilters: state.products.brandFilters,
  selectedColor: state.filters.selectedColor,
  selectedBrand: state.filters.selectedBrand,
  selectedSortingType: state.filters.selectedSortingType,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Sidebar);
