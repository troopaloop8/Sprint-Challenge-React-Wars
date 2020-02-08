import React from 'react';
import Character from './character';

const AllCharacters = props => {
    console.log(props.char);
    if (!props.char) {
        return <p>Hang on a sec, fetching characters</p>
    };
        

    return (

        props.char.map((char, index) => {
            return <Character char={char} index={index} />
        })
        
    )
}

export default AllCharacters;