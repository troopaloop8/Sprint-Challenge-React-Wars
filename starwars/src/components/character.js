import React from 'react';


const Character = props => {
    const character = props.char;
    return (
        <div>
            <div>
                <h1>{character.name}</h1>
                <p>{character.birth_year}</p>
                <p>{character.gender}</p>
                <p>{character.height}</p>
                <p>{character.hair_color}</p>
                <p>{character.eye_color}</p>
            </div>
        </div>
    )
}

export default Character;