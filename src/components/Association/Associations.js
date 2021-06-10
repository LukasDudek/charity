import React from 'react'

const Associations = ({associations}) => {

  return (
    <ul>
      {associations.map( (association, i) => 
        <li key={i} className='block-place'>
          <div className='info-place'>
            <h1>{association.association} "{association.name}"</h1>
            <h2>Cel i misja: {association.target}</h2>
          </div>
          <div className='details-place'>
            <h2>{association.necessaryThings}</h2>
          </div>
        </li>
        )}
    </ul>
  )
}

export default Associations;