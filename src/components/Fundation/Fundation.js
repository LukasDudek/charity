import React from 'react'

const Fundation = ({fundation}) => {

  return (
    <ul>
      {fundation.map( (fundation, i) => 
        <li key={i} className='block-place'>
          <div className='info-place'>
            <h1>Fundacja "<span>{fundation.name}</span>"</h1>
            <h2>Cel i misja: <span>{fundation.target}</span></h2>
          </div>
          <div className='details-place'>
            <h2>{fundation.necessaryThings}</h2>
          </div>
        </li>
        )}
    </ul>
  )
}

export default Fundation;