import React from 'react';
import Meteorite from './Meteorite.js'

class SearchResults extends React.Component {
  
  render() {
    return (
    <table className="main-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Name Type</th>
          <th>Rec Class</th>
          <th>Mass (g)</th>
          <th>Fall</th>
          <th>Year</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
      </thead>
      <tbody>
      {this.props.meteorites_arr.map(meteor => < Meteorite key={meteor.id} meteor={meteor} />)}
      </tbody>
      
    </table>
    )
  }
}

export default SearchResults