import React from "react"

export default function Recipe(props){

    const ingredidentElements = props.ingredidents.map(elem => <li>{elem}</li>)

    return(
        <div className="recipe">
            <h1>{props.title}</h1>
            <h3>Calories: {props.calories}</h3>
            <ul className="ingredient-list">
                {ingredidentElements}
            </ul>
            <img className="image" src={props.img} alt="Final product" />
        </div>
    )
}