import React from 'react';
import '../css/App.css';
import Cards from './Cards';

function App() {

    return (
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    );
}

export default App;
