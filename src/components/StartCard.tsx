import React from 'react';
import {Button} from "@mui/material";

interface IProps{
    startQuiz:()=>void;
    name:string | undefined;
    description:string | undefined;
}
const StartCard = ({startQuiz, name, description}:IProps)=>{
    return(
        <div className='__card'>
            <h1>{name}</h1>
            <h2>{description}</h2>
            <Button  color="secondary" variant="contained" onClick={startQuiz}>
                Start
            </Button>
        </div>
    )
}
export default StartCard;
