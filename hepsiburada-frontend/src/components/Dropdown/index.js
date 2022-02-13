import { useEffect } from 'react';
import { useState } from 'react';
import CaretDown from '../../assets/img/CaretDown.png';
import Tick from '../../assets/img/Tick.png';
import { sortingTypes } from '../../utils/constants';
import './index.css';

const Dropdown = ({ items, selectedItem, onSelect }) => {
  const [sItem, setSItem] = useState(null);

  useEffect(() => {
    setSItem(selectedItem);
  }, [selectedItem]);

  const onItemClick = item => {
    setSItem(item);
    onSelect(item);
  };

  return (
    <div className='dropdown'>
      <button className='dropbtn'>
        {sItem && sItem.name}
        <img src={CaretDown} alt='caretDown' />
      </button>
      <div className='dropdown-content'>
        {items.map(item => (
          <li
            key={item.id}
            className='list-item'
            onClick={() => onItemClick(item)}
          >
            <div className='list-image'>
              <img
                style={{
                  display: sItem && sItem.id === item.id ? 'inline' : 'none',
                }}
                src={Tick}
                alt='tick'
                width={'12px'}
              />
            </div>
            <div>{item.name}</div>
          </li>
        ))}
      </div>
    </div>
  );
};

Dropdown.defaultProps = {
  selectedItem: sortingTypes[0],
  onSelect: () => {},
};

export default Dropdown;
