import React, { Component } from 'react';

class Types extends Component {
    // This class will show all the Types of MTG Cards available

    constructor(props) {
      super(props);
      this.state = {
        items: [],
        isloaded: false,
      }
    }

    componentDidMount() {
      fetch('https://api.magicthegathering.io/v1/types')
        .then(res => res.json())
        .then(json => {

          this.setState({
            items: json,
            isloaded: true,
          })
        })
    }

    render() {
        // Simple render to show which types of MTG Cards are available.
      var { isloaded, items } = this.state;

      if (!isloaded) {
          return <div className='text-center m-5 text-light'>How many types of MTG Cards are there? Lets find out..........</div>
      }
      else {
          return <div className='text-center m-5 text-light'>
          <ul>
            {items.types.map(item => (
                <p key={item.id}>{item}</p>
            ))}
          </ul>
        </div>;
      }
    }
  }

  export default Types;