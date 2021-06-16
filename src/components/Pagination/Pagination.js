import React from 'react';

const Pagination = ({postsPerPage, totalPost, paginate, activePaginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  

  return pageNumbers.length !== 1 ? (
    <>
      <ul className='pagination'>
        {pageNumbers.map( number => 
          <li key={number}>
            <button onClick={(e)=> {paginate(number, e)}} className={activePaginate === number ? "active" : ""} >{number}</button>
          </li>)}
      </ul>
    </> 
  ) : null;
}

export default Pagination;