import "components/Items/items.module.css";
import { useState } from "react";

import { SkeletonLoader } from "components/Loader";

function AnswerContent({ isShowAnswer, answer }) {
    const activeClass = isShowAnswer ? "active" : "";
    return <div className={`question-answer ${activeClass}`}>{answer}</div>;
}

export default function QuestionItem({ content, isLoading, containerStyle }) {
    const [isShow, setIsShow] = useState(false);

    const handleAnswerButton = () => {
        setIsShow(!isShow);
    };

    const activeClass = isShow ? "active" : "";
    const arrowButton = isShow ? "/arrow-active.svg" : "/arrow-down.svg";

    return (
        <div style={{ ...containerStyle }}>
            <div className={`question-content ${activeClass}`}>
                {!isLoading && (
                    <>
                        <a>{content.question}</a>
                        <button onClick={handleAnswerButton}>
                            <img
                                src={`${arrowButton}`}
                                alt="Arrow Icon"
                                className="question-arrow"
                            />
                        </button>
                    </>
                )}

                {isLoading && (
                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <SkeletonLoader height={15} style={{ minWidth: 200 }} />
                    </div>
                )}
            </div>
            <AnswerContent
                handleAnswerButton={handleAnswerButton}
                isShowAnswer={isShow}
                answer={content?.answer}
            />
        </div>
    );
}
