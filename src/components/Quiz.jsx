import QUESTIONS from "../assets/questions";
import { useState } from "react";
import quizComplete from "../assets/quiz-complete.png";
import kissImg from "../assets/kiss.png";

const correctAnswers = QUESTIONS.map((question) => question.answers[0]);

const Quiz = () => {
    const [playerAnswers, setPlayerAnswers] = useState([]);
    const currentQuestion = playerAnswers.length;

    const handlePlayerSelection = (answer) => {
        setPlayerAnswers([...playerAnswers, answer]);
        console.log(playerAnswers);
    };

    if (playerAnswers.length === QUESTIONS.length) {
        return (
            <div id="summary">
                <img src={kissImg} alt="trophy picture" />
                <h2>Bravo Loumi here's a kiss from me, Now back to studying!</h2>
                <h4>PS: I Love you hehe</h4>
                
            </div>
        );
    }

    const shuffledAnswers = QUESTIONS[currentQuestion].answers.sort(
        () => Math.random() - 0.5
    );

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[currentQuestion].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button
                                onClick={() => handlePlayerSelection(answer)}
                            >
                                {answer}
                            </button>
                        </li>
                    ))}
                    {/* <div>{correctAnswers[currentQuestion]}</div> */}
                </ul>
            </div>
        </div>
    );
};

export default Quiz;
