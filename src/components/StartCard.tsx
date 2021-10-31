import React from 'react';
import {Button} from "@mui/material";

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
            <Button  color="secondary" variant="contained" onClick={startQuiz}>
                Start
            </Button>
        </div>
    )
}
export default StartCard;
