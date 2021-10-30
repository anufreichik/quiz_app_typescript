import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {TQuestion} from "../utils";


interface IProps {
    question: TQuestion;
    next:(answer:string)=>void;
}

const QuestionCard = ({question, next}: IProps) => {
    const [answer, setAnswer]=useState('');

    const submitAnswer=()=>{
        next(answer);
        setAnswer('')
    }

    return (
        <>
            <div>{question.text}</div>
            <div>
                <TextField id="outlined-basic" label="Answer goes here" variant="outlined"  style = {{width: 500}} value={answer}
                           onChange={event => {
                               const { value } = event.target;
                               setAnswer(value);
                           }}

                />
            </div>
            <button className='next' onClick={submitAnswer}>Next Question</button>
        </>
    )
}
export default QuestionCard;
