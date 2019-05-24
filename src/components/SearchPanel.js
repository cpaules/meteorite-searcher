import React from 'react';

class SearchPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searched_meteorites_arr: [] }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let current_meteorites_arr = [];
    let new_meteorites_arr = [];
    if (event.target.value !== "") {
      current_meteorites_arr = this.props.meteorites_arr;
      new_meteorites_arr = current_meteorites_arr.filter(meteor => {
        const lc = meteor.name.toLowerCase();
        const filter = event.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      new_meteorites_arr = this.props.meteorites_arr;
    }
    this.setState({
      searched_meteorites_arr: new_meteorites_arr
    });
  }

  handleSubmit(event) {
    if (event.target[0].value !== "") {
      this.props.handleNewState(this.state.searched_meteorites_arr)
    } else {
      let value = this.props.apiCall()
      console.log(value)
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" className="input" onChange={this.handleChange} placeholder="Enter search terms" />
        <input type="submit" value="SEARCH"/>
      </form>
    )
  }
}

export default SearchPanel