import React, {useEffect, useState} from 'react';
import './App.css';
import QuestionCard from "./components/QuestionCard";
import StartCard from "./components/StartCard";
import SectionCard from "./components/SectionCard";
import {ISurvey, TAnswer} from "./utils";
import FinishCard from "./components/FinishCard";
import Layout from "./components/Layout";
import {Box} from "@mui/material";
import axios from "axios";

const App = () => {
    // -GET survey json: https://run.mocky.io/v3/e56a3256-8703-4705-a182-77cad0b702d1
    //     -GET each question json: https://run.mocky.io/v3/08e34c6f-c0ee-46fc-9e36-80dafb5bc2be
    //     -POST survey responses json: https://run.mocky.io/v3/b081763d-eef1-44ab-8bab-3ce008c49bdf


    const [surveyData, setSurveyData] = useState<ISurvey>();
    const [started, setStarted] = useState(false);
    const [done, setDone] = useState(false);
    const [currentQuestionInd, setCurrentQuestionInd] = useState(0);
    const [currentQuestionId, setCurrentQuestionId] = useState('');
    const [currentSectionInd, setCurrentSectionInd] = useState(0);
    const [answers, setAnswers] = useState<TAnswer[]>([]);


    const startQuiz = () => {
        setStarted(true);
    }

    const saveAnswer = (answer: string) => {
        const list = [...answers, {questionId: currentQuestionId, responseText: answer}];
        setAnswers(list);
    }

    const next = (answer: string) => {
        let nextQuestionInd: number;
        saveAnswer(answer);
        if (surveyData && surveyData?.sections[currentSectionInd].questionIds?.length > currentQuestionInd + 1) {
            nextQuestionInd = currentQuestionInd + 1;
            setCurrentQuestionInd(prev => prev + 1);
            setCurrentQuestionId(surveyData.sections[currentSectionInd].questionIds[nextQuestionInd]);
        } else {
            if (surveyData && surveyData?.sections?.length > currentSectionInd + 1) {
                const nextSectionInd = currentSectionInd + 1;
                setCurrentSectionInd(nextSectionInd);
                setCurrentQuestionInd(0);
                setCurrentQuestionId(surveyData.sections[nextSectionInd].questionIds[0]);
            } else {
                setDone(true);
            }
        }
    }
    useEffect(() => {
        //call api
        axios.get('https://run.mocky.io/v3/e56a3256-8703-4705-a182-77cad0b702d1')
            .then((res) => {
                console.log(res.data)
                setSurveyData(res.data);
                setCurrentQuestionId(res.data?.sections[0]?.questionIds[0]);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    return (
        <Layout>
            {!started ? (

                    <StartCard startQuiz={startQuiz} name={surveyData?.surveyName}
                               description={surveyData?.surveyName}/>

                )
                :
                !done ?
                    (
                        <>
                            <SectionCard title={surveyData?.sections[currentSectionInd]?.title}/>
                            <QuestionCard question={currentQuestionId} next={next}/>
                        </>
                    )
                    :

                    <FinishCard answers={answers}/>

            }

        </Layout>
    );
}

export default App;
