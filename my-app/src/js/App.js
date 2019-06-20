import React from 'react';
import '../css/App.css';

function App() {
    return (

        fetch('https://api.magicthegathering.io/v1/cards')
            .then(Response => console.log(Response)),

        < div className="App" >
            <header className="App-header">
                <p>
                    Hello World!
                </p>
            </header>
        </div >
    );
}

export default App;
