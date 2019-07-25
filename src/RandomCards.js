import React, { Component } from 'react';

class RandomCards extends Component {
    // This class will pull 10 random cards from the MTG API

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
      fetch('https://api.magicthegathering.io/v1/cards?pageSize=10&random=true')
        .then(res => res.json())
        .then(json => {

          this.setState({
            items: json,
            isloaded: true,
          })
        })
    }

    render() {
        // Setting variables to be used while rendering the page
      var { isloaded, items } = this.state;

      if (!isloaded) {
        //   Simple text while API is being called
          return <div className='text-center m-5 text-light'>Loading up to 10 MTG Cards (with Pictures, I hope)..........</div>
      }
      else {
        //   This will parse, format, and return the cards to the webpage
        return <div>
          <ul>
            {items.cards.map(item => (
              <div className='text-center m-5 text-light' key={item.id}>
                  <div>
                    <span>{item.name}</span>
                    <br></br>
                    <img src={item.imageUrl} alt=""></img>
                  </div>
              </div>
            ))}
          </ul>
        </div>;
      }
    }
  }

  export default RandomCards;