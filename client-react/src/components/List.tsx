import React from 'react'
import { IState as Props } from "../App";
import Button from '@mui/material/Button';

interface IProps {
    people: Props["people"]
}

const List: React.FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map(person => {
            return (
                
                <li className="List" key={person.id}>
                    <div className="List-header">
                        <h2>{person.name}</h2>
                    </div>
                    <Button variant="contained">Hello World</Button>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()} 
        </ul>
    )
}

export default List