import { useState } from 'react';

import './index.css';

const Pagination = ({ dataLength, pageLimit, dataLimit, onPageChange }) => {
  const [pages] = useState(Math.round(dataLength / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage(page => page + 1);
    onPageChange(currentPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(page => page - 1);
    onPageChange(currentPage - 1);
  };

  const changePage = event => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      <div className='pagination'>
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
        >
          {`<`}
        </button>

        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? 'active' : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? 'disabled' : ''}`}
        >
          {`>`}
        </button>
      </div>
    </div>
  );
};

Pagination.defaultProps = {
  data: [1, 2, 3],
};

export default Pagination;
