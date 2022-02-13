import { connect } from 'react-redux';
import { compose } from 'redux';
import Search from '../../assets/img/Search.png';
import { setSearchText } from '../../redux/actions/searchAction';
import './index.css';

const Searchbar = ({ dispatch }) => {
  const onInputChange = e => {
    if (e.target.value.length > 2) {
      dispatch(setSearchText(e.target.value));
    }
    if (e.target.value.length === 0) {
      dispatch(setSearchText(e.target.value));
    }
  };

  return (
    <div className='input-icons'>
      <img className='icon' src={Search} alt='search' />
      <input
        className='input-field'
        type='text'
        placeholder='25 milyon’dan fazla ürün içerisinde ara'
        onChange={onInputChange}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const mapStateToProps = state => ({
  selectedSortingType: state.filters.selectedSortingType,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Searchbar);
