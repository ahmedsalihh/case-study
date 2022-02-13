import { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { removeFromBasket } from '../../redux/actions/basketActions';

import Image1 from '../../assets/img/image1.png';
import Image2 from '../../assets/img/image2.png';
import Image3 from '../../assets/img/image3.png';
import Image4 from '../../assets/img/image4.png';

import './index.css';

const images = [Image1, Image2, Image3, Image4];

const Basket = ({ dispatch, text, items }) => {
  const [show, setShow] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const getImage = product => {
    switch (product.color.name) {
      case 'Siyah':
        return images[0];
      case 'Kırmızı':
        return images[1];
      case 'Beyaz':
        return images[2];
      case 'Sarı':
        return images[3];
      case 'Lacivert':
        return images[2];
      default:
        return images[0];
    }
  };

  const onYesClick = () => {
    dispatch(removeFromBasket(selectedItemId));
    setShow(false);
  };

  const onDeleteClick = id => {
    setSelectedItemId(id);
    setShow(true);
  };

  const footer = (
    <>
      <Button buttonType='success' onClick={onYesClick}>
        Evet
      </Button>
      <Button
        buttonType='danger'
        style={{ marginLeft: '10px' }}
        onClick={() => setShow(false)}
      >
        Hayir
      </Button>
    </>
  );

  return (
    <>
      <Modal
        show={show}
        onClose={() => setShow(false)}
        header='Ürünü silmek istediğinize emin misiniz?'
        footer={footer}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentiall....
      </Modal>
      <div className='basket'>
        <button className='notification'>
          <span>{text}</span>
          <span className='badge'>{items && items.length}</span>
        </button>
        <div className='basket-content'>
          {items && items.length > 0 ? (
            items.map(item => (
              <div className='basket-content__item' key={item.id}>
                <div className='basket-content__item-imageContainer'>
                  <img src={getImage(item)} alt='' />
                </div>
                <div className='basket-content__item-contentContainer'>
                  <div className='basket-content__item-contentContainer-title'>
                    {item.name}
                  </div>
                  <button
                    className='basket-content__item-contentContainer-button'
                    onClick={() => onDeleteClick(item.id)}
                  >
                    Kaldır
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>Sepetinizde Ürün Bulunmamaktadır</div>
          )}
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const mapStateToProps = state => ({
  items: state.basket.items,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Basket);
