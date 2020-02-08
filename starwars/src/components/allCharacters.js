import React from 'react';
import Character from './character';
import { Container, Row } from "reactstrap";



const AllCharacters = props => {
    console.log(props.char);
    if (!props.char) {
        return <p>Hang on a sec, fetching characters</p>
    };
    

    return (
        <Container>
            <Row>
                {props.char.map((char, index) => {
                return <Character char={char} key={index} />
                })}
              
            </Row>
        </Container>
        
        
    )
}

export default AllCharacters;