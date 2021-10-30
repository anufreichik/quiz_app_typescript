import React from 'react';
import {TAnswer} from "../utils";


interface IProps{
    answers:TAnswer[]
}
const FinishCard = ({answers}:IProps)=>{
    return(
        <div>
            {answers.map(el=><li>{el.answer}</li>)}
        </div>
    )
}
export default FinishCard;
