import React, { useState} from 'react';
import Decoration from '../Decoration';
import Fundation from '../Fundation';
import Pagination from '../Pagination';

const HomeWhoWeHelp = () => {
  const [fundation, setFundation] = useState([
    {
      name: 'Dbam o Zdrowie',
      target: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
      necessaryThings: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki',
    },
    {
      name: 'Dla dzieci',
      target: 'Pomoc dzieciom z ubogich rodzin.',
      necessaryThings: 'ubrania, meble, zabawki',
    },
    {
      name: 'Bez domu',
      target: 'Pomoc dla osób nie posiadających miejsca zamieszkania.',
      necessaryThings: 'ubrania, jedzenie, ciepłe koce',
    },
    {
      name: 'Miłość',
      target: 'dla szukajacych Miłości',
      necessaryThings: 'miłość',
    },
    {
      name: 'Wszystko ok',
      target: 'Wszystko będzie wporządku.',
      necessaryThings: 'like',
    },
    {
      name: 'Na zdrowie',
      target: 'Wspolne swiętowanie',
      necessaryThings: 'Humor',
    },
    {
      name: 'Nadzieja',
      target: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
      necessaryThings: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki',
    },
    {
      name: 'Szczęście',
      target: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
      necessaryThings: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki',
    },
    {
      name: 'Uśmiech',
      target: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
      necessaryThings: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki',
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  const indexOfLastFund = currentPage * postPerPage;
  const indexOfFirstFund = indexOfLastFund - postPerPage;
  const currentFunds = fundation.slice(indexOfFirstFund, indexOfLastFund);

  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  }
  

  return (
    <>
      <div className='home-who-we-help-cont' id='help-places'>
        <h1>Komu pomagamy?</h1>
        <Decoration/>
        <div className='types-of-help-places'>
          <button>Fundacjom</button>
          <button>Organizacjom<br/> pozarządowym</button>
          <button>Lokalnym<br/>  zbiórkom</button>
        </div>
        <div className='details-of-places-cont'>
          <h2>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z<br/> którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br/> komu pomagają i czego potrzebują.</h2>
          <div className='list-of-places'>
            <Fundation fundation={currentFunds}/>
            <Pagination postsPerPage={postPerPage} totalPost={fundation.length} paginate={paginate}/>
          </div>
        </div>
      </div>
    </>
  )
  
}

export default HomeWhoWeHelp;