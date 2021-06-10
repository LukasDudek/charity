import React from 'react';

const Pagination = ({postsPerPage, totalPost, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return pageNumbers.length != 1 ? (
    <>
      <ul className='pagination'>
        {pageNumbers.map( number => 
          <li key={number}>
            <a onClick={(e)=> paginate(number, e)} href=''>{number}</a>
          </li>)}
      </ul>
    </> 
  ) : null;
}

export default Pagination;