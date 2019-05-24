import React from 'react';


const Meteorite = ({ meteor }) => (
    <tr key={meteor.id} className="Meteorite">
      <td className='td-left'>{meteor.name}</td>
      <td>{meteor.id}</td>
      <td className='td-left'>{meteor.nametype}</td>
      <td className='td-left'>{meteor.recclass}</td>
      <td className='td-mass'>{meteor.mass}</td>
      <td>{meteor.fall}</td>
      <td className='td-left'>{(new Date(meteor.year)).getFullYear()}</td>
      <td>{meteor.reclat}</td>
      <td>{meteor.reclong}</td>
    </tr>
  )
  
export default Meteorite;