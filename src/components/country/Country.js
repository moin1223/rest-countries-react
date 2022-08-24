import React from 'react';

const Country = (props) => {
  
    const {common} = props.country.name
    return (
        <div>
            <h2>Name: {common}</h2>
            <h4>Region: {props.country.region}</h4>
            <img src={props.country.flags.png} alt="" />
            
        </div>
    );
};

export default Country;