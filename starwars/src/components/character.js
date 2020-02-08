import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Col, Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

import './StarWars.css'

const Character = props => {
    const character = props.char;
    return (
        <Col xs="6" md="6" xl="4">
            <Card>
                <CardBody>
                    <CardTitle><h3>{character.name}</h3></CardTitle>
                    <CardText>Born: {character.birth_year}</CardText>
                    <CardText>Gender: {character.gender}</CardText>
                    <CardText>Height: {character.height}</CardText>
                    <CardText>Weight: {character.mass}</CardText>
                    <CardText>Eye Color: {character.eye_color}</CardText>
                    <CardText>Hair Color: {character.hair_color}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Character;