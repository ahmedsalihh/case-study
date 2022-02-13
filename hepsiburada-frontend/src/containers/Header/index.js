import { connect } from 'react-redux';
import { compose } from 'redux';
import Dropdown from '../../components/Dropdown';
import { selSelectedSortingType } from '../../redux/actions/filterActions';
import { sortingTypes } from '../../utils/constants';
import './index.css';

const Header = ({ dispatch, searchText, selectedSortingType }) => {
  const onSelect = item => {
    dispatch(selSelectedSortingType(item));
  };
  return (
    <div className='container'>
      <div className='header'>
        <div className='header__headerLeft'>
          <div className='header__headerLeft-title'>
            iPhone iOS cep telefonu
          </div>
          <div className='header__headerLeft-subTitle'>
            Aranan Kelime:&nbsp; <span>{searchText}</span>
          </div>
        </div>
        <div className='header__headerRight'>
          <Dropdown
            text='Sıralama'
            items={sortingTypes}
            selectedItem={selectedSortingType}
            onSelect={onSelect}
          />
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  searchText: 'iphone 11',
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const mapStateToProps = state => ({
  selectedSortingType: state.filters.selectedSortingType,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Header);
