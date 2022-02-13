import { useState } from 'react';

import Button from '../Button';

import Image1 from '../../assets/img/image1.png';
import Image2 from '../../assets/img/image2.png';
import Image3 from '../../assets/img/image3.png';
import Image4 from '../../assets/img/image4.png';

import './index.css';

const images = [Image1, Image2, Image3, Image4];

const ProductCard = ({ product, onAddToBasket, disabled }) => {
  const [isHover, setIsHover] = useState(false);

  const getImage = () => {
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

  const mouseEnter = () => {
    setIsHover(true);
  };

  const mouseLeave = () => {
    setIsHover(false);
  };

  const onAddToBasketClick = () => {
    onAddToBasket(product);
  };

  return (
    <>
      {isHover ? (
        <div
          className='hoverContent'
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <div className='hoverContent__image'>
            <img src={getImage()} alt='img' />
          </div>
          <div className='productCard__productInfo'>
            <div className='productCard__productInfo-title'>{product.name}</div>
          </div>
          <div className='hoverContent__button'>
            <Button
              onClick={onAddToBasketClick}
              disabled={disabled}
              buttonType={`${disabled ? 'disabled' : 'orange'}`}
            >
              {disabled ? 'Bu ürünü sepete ekleyemezsiniz' : 'Sepete Ekle'}
            </Button>
          </div>
        </div>
      ) : (
        <div
          className='productCard'
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <div className='productCard__image'>
            <img src={getImage()} alt='img' />
          </div>
          <div className='productCard__productInfo'>
            <div className='productCard__productInfo-title'>{product.name}</div>
            <div className='productCard__productInfo-specs'>
              <div className='productCard__productInfo-specs__container'>
                <span className='productCard__productInfo-specs-title'>
                  Marka:&nbsp;
                </span>
                <span className='productCard__productInfo-specs-value'>
                  {product.brand.name}
                </span>
              </div>
              <div className='productCard__productInfo-specs__container'>
                <span className='productCard__productInfo-specs-title'>
                  Renk:&nbsp;
                </span>
                <span className='productCard__productInfo-specs-value'>
                  {product.color.name}
                </span>
              </div>
            </div>
          </div>
          <div className='productCard__productPrice'>
            <div className='productCard__productPrice__container'>
              <div className='productCard__productPrice-netPrice'>
                {(
                  product.price -
                  Math.round(product.price * product.discount) / 100
                ).toFixed(2)}
              </div>
              <div className='productCard__productPrice-grossPrice'>
                <span className='productCard__productPrice-grossPrice-price'>
                  {`${product.price} TL`}
                </span>
                &nbsp;
                <span className='productCard__productPrice-grossPrice-discount'>
                  {`${product.discount} %`}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ProductCard.defaultProps = {
  product: {
    image: '',
    name: 'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...',
    brand: {
      id: 1,
      name: 'Apple',
    },
    color: {
      id: 1,
      name: 'Siyah',
    },
    price: 124.0,
    discount: 12,
  },
};

export default ProductCard;
