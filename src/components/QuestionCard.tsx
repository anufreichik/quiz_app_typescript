import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {TQuestion} from "../utils";
import {Box, Button} from "@mui/material";


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
        <Box sx={{
            display: 'flex',
            p: 1,
            m: 1,
            backgroundColor: 'background.white',
            flexDirection: 'column',
            justifyContent: 'center'

        }}>
            <div>{question.text}</div>
            <Box  sx={{ marginTop:2 }}>
                <TextField id="outlined-basic" label="Answer goes here" variant="outlined"  style = {{width: 500}} value={answer}
                           onChange={event => {
                               const { value } = event.target;
                               setAnswer(value);
                           }}

                />
            </Box>
            <div>
                <Button color="secondary" variant="contained" onClick={submitAnswer}  sx={{ marginTop:2 }}>Next Question</Button>
            </div>

        </Box>
    )
}
export default QuestionCard;
