import Logo from '../../assets/img/Logo.png';
import Basket from '../../containers/Basket';
import Searchbar from '../../containers/Searchbar';
import './index.css';

const Navbar = () => (
  <div className='navbar'>
    <img className='navbar__logo' src={Logo} alt='Logo' />
    <Searchbar />
    <Basket text='Sepetim' count={3} />
  </div>
);

export default Navbar;
