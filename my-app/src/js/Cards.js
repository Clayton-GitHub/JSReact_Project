import React from 'react';

const Cards = ({ cards }) => {
    return (
        <div>
            <center><h1>Card List</h1></center>
            {cards.map((card) => (
                <div>
                    <h5>{contact.name}</h5>
                    <h6>{contact.email}</h6>
                    <p>{contact.company.catchPhrase}</p>
                </div>

            ))}
        </div>
    )
};

export default Contacts