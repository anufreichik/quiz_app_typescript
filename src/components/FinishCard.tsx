import React, {useEffect} from 'react';
import {TAnswer} from "../utils";
import axios from "axios";

interface IProps {
    answers: TAnswer[]
}

const FinishCard = ({answers}: IProps) => {
    useEffect(() => {
        const surveyPostData = {
            surveyId: "889278b3-e56f-4a20-adef-9f601a363524",
            responses: answers
        }
        axios.post(` https://run.mocky.io/v3/b081763d-eef1-44ab-8bab-3ce008c49bdf`, surveyPostData)
            .then(res => console.log(res, 'Created Successfully!'))
            .catch(err => console.log(err, 'Fail')
            )
    }, []);

    return (
        <div  className='__card'>
            <svg width='160' height='160' viewBox='0 0 160 160' fill='none'>
                <path
                    d='M53.334 83.3335L73.334 103.333L106.667 63.3335'
                    stroke='#AC3EA4'
                    strokeWidth='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M80.0007 146.667C116.82 146.667 146.667 116.819 146.667 80.0002C146.667 43.1812 116.82 13.3335 80.0007 13.3335C43.1817 13.3335 13.334 43.1812 13.334 80.0002C13.334 116.819 43.1817 146.667 80.0007 146.667Z'
                    stroke='#AC3EA4'
                    strokeWidth='10'
                />
            </svg>
        </div>
    )
}
export default FinishCard;
