import React from 'react';

interface IProps{
    startQuiz:()=>void;
    name:string;
    description:string;
}
const StartCard = ({startQuiz, name, description}:IProps)=>{
    return(
        <div>
            <h2>{name}</h2>
            <h3>{description}</h3>
            <button className='start' onClick={startQuiz}>
                Start
            </button>
        </div>
    )
}
export default StartCard;
