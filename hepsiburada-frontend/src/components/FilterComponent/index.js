import './index.css';

const FilterComponent = ({ title, filters, selectedItem, setSelectedItem }) => {
  const onItemClick = item => {
    setSelectedItem(item);
  };
  return (
    <div className='filterContainer'>
      <div className='filterContainer-header'>{title}</div>
      <div className='filterContainer-list'>
        {filters &&
          filters.map(item => (
            <li
              className={
                selectedItem && selectedItem.id === item.id ? 'selected' : ''
              }
              key={item.id}
              onClick={() => onItemClick(item)}
            >{`${item.name} (${item.count})`}</li>
          ))}
      </div>
    </div>
  );
};

FilterComponent.defaultProps = {
  setSelectedItem: () => {},
  selectedItem: { id: 1, name: 'Sarı', count: 1 },
};

export default FilterComponent;
