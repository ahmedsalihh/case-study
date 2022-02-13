import './index.css';

const SortComponent = ({
  title,
  sotingTypes,
  selectedItem,
  setSelectedItem,
}) => {
  const onItemClick = item => {
    setSelectedItem(item);
  };
  return (
    <div className='sortContainer'>
      <div className='sortContainer-header'>{title}</div>
      <div className='sortContainer-list'>
        {sotingTypes.map(item => (
          <li
            className={selectedItem.id === item.id ? 'selected' : ''}
            key={item.id}
            onClick={() => onItemClick(item)}
          >{`${item.name}`}</li>
        ))}
      </div>
    </div>
  );
};

SortComponent.defaultProps = {
  setSelectedItem: () => {},
  selectedItem: { id: 1, name: 'Sarı', count: 1 },
};

export default SortComponent;
