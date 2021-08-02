import "components/Items/items.module.css";
import { useState } from "react";


function AnswerContent({handleAnswerButton, isShowAnswer, answer}) {
    const activeClass = isShowAnswer ? "active" : "";
    
    return (
        <div className={`question-answer ${activeClass}`}>
            {answer}
        </div>
    );
}

export default function QuestionItem({ content }) {
    const [isShow, setIsShow] = useState(false);

    const handleAnswerButton = () => {
        setIsShow(!isShow);
    }

    const activeClass = isShow ? "active" : "";

    const arrowButton = isShow ? "/arrow-active.svg" : "/arrow-down.svg";

    return (
        <div>
            <div className={`question-content ${activeClass}`} onClick={handleAnswerButton}>
                <a>{content.question}</a>
                <button onClick={handleAnswerButton}>
                    <img src={`${arrowButton}`} alt="Arrow Icon" className="question-arrow" />
                </button>
            </div>
            <AnswerContent handleAnswerButton={handleAnswerButton} isShowAnswer={isShow} answer={content.answer}/>
        </div>    
    )
}
