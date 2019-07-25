import React, { Component } from 'react';

class Sets extends Component {
    // This class will pull all sets released by MTG via their API. Will show Name and Release Date

    // This will create the object that will be used
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        isloaded: false,
      }
    }

    // This will make the API call and then store it in a JSON and change the isLoaded variable to true
    componentDidMount() {
      fetch('https://api.magicthegathering.io/v1/sets')
        .then(res => res.json())
        .then(json => {

          this.setState({
            items: json,
            isloaded: true,
          })
        })
    }

    render() {
      // Variables to be used to help render the page
      var { isloaded, items } = this.state;

      // Checking if data has been returned from the API and will display accordingly
      if (!isloaded) {
          return <div className='text-center m-5 text-light'>Lets see how many MTG Sets there are and when they were released. Your guesses??? Loading..........</div>
      }
      else {
          return <div className='text-center m-5 text-light'>
          <ul>
            {items.sets.map(item => (
              <div key={item.id}>
                <span>{item.name}</span>
                <br></br>
                <span>{item.releaseDate}</span>
                <br></br>
                <br></br>
              </div>

            ))}
          </ul>
        </div>;
      }
    }
  }

  export default Sets;