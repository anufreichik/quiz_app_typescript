import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import {Box, Button} from "@mui/material";
import axios from "axios";
import {TQuestion} from "../utils";


interface IProps {
    question: string;
    next:(answer:string)=>void;
}

const QuestionCard = ({question, next}: IProps) => {
    const [answer, setAnswer]=useState('');
    const [questionData, setQuestionData]=useState<TQuestion>();

    const submitAnswer=()=>{
        next(answer);
        setAnswer('')
    }

    useEffect(() => {
        axios.get(`https://run.mocky.io/v3/${question}`)
            .then((res) => {
                setQuestionData(res.data);
            } );
    }, [question]);

    return (
        <Box sx={{
            display: 'flex',
            p: 1,
            m: 1,
            backgroundColor: 'background.white',
            flexDirection: 'column',
            justifyContent: 'center'

        }}>
            <div>{questionData?.questionText}</div>
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
