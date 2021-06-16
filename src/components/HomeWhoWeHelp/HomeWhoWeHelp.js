import React, { useState} from 'react';
import Decoration from '../Decoration';
import Associations from '../Association';
import Pagination from '../Pagination';
import {fundations, organizations, local} from "../../data/data-fundation";
import {
  fundationDescription, 
  nonGovernmentalOrganizationDescription, 
  localDescriptiontion} 
    from '../../data/data-description';

const HomeWhoWeHelp = () => {
  const [associations, setAssociations] = useState([
    ...fundations
  ]);
  const [describeOfPlace, setDescribeOfPlace] = useState({      
    ...fundationDescription
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);
  const [active, setActive] = useState(1);
  const [activePaginate, setActivePaginate] = useState(1);

  const showFundation = (e) => {
    setCurrentPage(1)
    setAssociations(
      [...fundations]

    );
    setDescribeOfPlace({
      ...fundationDescription
    });
    setActive(1);
  }

  const showOrganization = (e) => {
    setCurrentPage(1)
    setAssociations(
      [...organizations]
    );
    setDescribeOfPlace({
      ...nonGovernmentalOrganizationDescription
    });
    setActive(2);
  }

  const showLocal = (e) => {
    setCurrentPage(1)
    setAssociations(
      [...local]
    );

    setDescribeOfPlace({
      ...localDescriptiontion
    });
    setActive(3);
  }
  

  const indexOfLastAssoc = currentPage * postPerPage;
  const indexOfFirstAssoc = indexOfLastAssoc - postPerPage;
  const currentAssoc = associations.slice(indexOfFirstAssoc, indexOfLastAssoc);

  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
    setActivePaginate(pageNumber);
  }

  
  return (
    <>
      <div className='home-who-we-help-cont' id='help-places'>
        <h1>Komu pomagamy?</h1>
        <Decoration/>
        <div className='types-of-help-places'>
          <button 
            onClick={e => showFundation(e)} 
            className={active === 1 ? "active" : ""}
          >
            Fundacjom
          </button>
          <button onClick={e => showOrganization(e)} className={active === 2 ? "active" : ""}>Organizacjom<br/> pozarządowym</button>
          <button onClick={e => showLocal(e)} className={active === 3 ? "active" : ""}>Lokalnym<br/>  zbiórkom</button>
        </div>
        <div className='details-of-places-cont'>
          <h2>
            <span>{describeOfPlace.firstRow}</span>
            <span>{describeOfPlace.secondRow}</span>
            <span>{describeOfPlace.thirdRow}</span>
          </h2>
          <div className='list-of-places'>
            <Associations associations={currentAssoc}/>
            <Pagination postsPerPage={postPerPage} totalPost={associations.length} paginate={paginate} activePaginate={activePaginate} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeWhoWeHelp;