import React, {useState} from 'react';
import './App.css';
import QuestionCard from "./components/QuestionCard";
import StartCard from "./components/StartCard";
import SectionCard from "./components/SectionCard";
import {TAnswer, TQuestion} from "./utils";
import FinishCard from "./components/FinishCard";
import Layout from "./components/Layout";
import {Box} from "@mui/material";

const App = () => {

    const quizData = {
        name: 'My Quiz',
        description: 'My Quiz Description',
        sections: [
            {
                title: 'Section 1',
                questions: [
                    '1', '2', '3'
                ]
            },
            {
                title: 'Section 2',
                questions: [
                    '4', '5'
                ]
            }
        ]
    }
    const questionsData = [
        {id: '1', text: 'What is you favorite color?'},
        {id: '2', text: 'What is you favorite food?'},
        {id: '3', text: 'What is you favorite travel destination?'},
        {id: '4', text: 'What is you favorite restaurant?'},
        {id: '5', text: 'What is you favorite activity?'},
    ]

    const getQuestionById = (id: string) => {
        return questionsData.find(q => q.id === id);
    }

    const initialQuestion = getQuestionById(quizData.sections[0].questions[0]);
    const [started, setStarted] = useState(false);
    const [done, setDone] = useState(false);
    const [currentQuestionInd, setCurrentQuestionInd] = useState(0);
    const [currentQuestionData, setCurrentQuestionData] = useState<TQuestion>(initialQuestion!);
    const [currentSectionInd, setCurrentSectionInd] = useState(0);
    const [answers, setAnswers]=useState<TAnswer[]>([]);


    const startQuiz = () => {
        setStarted(true);
    }

    const saveAnswer=(answer:string)=>{
        const list = [...answers, {questionID:currentQuestionData.id, answer:answer}];
        setAnswers(list);
        console.log(list);
    }

    const next = (answer:string) => {
        let nextQuestionInd:number;
        saveAnswer(answer);

        if(quizData.sections[currentSectionInd].questions.length>currentQuestionInd+1){
            nextQuestionInd = currentQuestionInd +1;
            setCurrentQuestionInd(nextQuestionInd);
            const curQuestion = getQuestionById(quizData.sections[currentSectionInd].questions[nextQuestionInd]);
            setCurrentQuestionData(curQuestion!);
        }
        else
        {
            if(quizData.sections.length>currentSectionInd+1){
                const nextSectionInd = currentSectionInd+1;
                setCurrentSectionInd(nextSectionInd);
                setCurrentQuestionInd(0);
                const curQuestion = getQuestionById(quizData.sections[nextSectionInd].questions[0]);
                setCurrentQuestionData(curQuestion!);
            }
            else{
                setDone(true);
            }
        }
    }

    return (
        <Layout>
            {!started ? (<StartCard startQuiz={startQuiz} name={quizData.name} description={quizData.description}/>)
                :
                !done?
                (
                    <Box sx={{
                        display: 'flex',
                        p: 1,
                        m: 1,
                        backgroundColor: 'background.white',
                        flexDirection: 'column',
                        justifyContent: 'center'

                    }}>
                        <SectionCard title={quizData.sections[currentSectionInd].title}/>
                        <QuestionCard  question={currentQuestionData} next={next}/>
                    </Box>
                )
                    :
                   <FinishCard answers={answers}/>
            }

        </Layout>
    );
}

export default App;
