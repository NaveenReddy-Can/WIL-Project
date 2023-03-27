import React, { useState } from "react";
import '../css/Quiz.css';



function C4Quiz2() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);


    const questions = [

        {

            text: "1. Food products received should always be inspected before accepting them. ",

            choices: ["True", "False",],

            correctAnswer: "True"

        },

        {

            text: "2. It is not necessary to check the expiration date of the food products received. ",

            choices: ["True", "False",],

            correctAanswer: "False"

        },

        {

            text: "3.Food products that are damaged or have broken seals should not be accepted.",

            choices: ["True", "False",],

            correctAnswer: "True"

        },

        {

            text: "4. It is safe to accept food products that have been left in direct sunlight.",

            choices: ["True", "False",],

            correctAnswer: "False"

        },

        {

            text: "5. All food products received should be stored immediately in their proper location.",

            choices: ["True", "False",],

            correctAnswer: "True"

        },

        {

            text: "6. It is okay to accept food products that have been stored at incorrect temperatures.",

            choices: ["True", "False",],

            correctAnswer: "False"


        },

        {

            text: "7. Food products should be received in a clean and sanitary condition.",

            choices: ["True", "False",],

            correctAnswer: "True"

        },
        {

            text: "8. It is acceptable to receive food products that have been partially thawed. ",

            choices: ["True", "False",],

            correctAnswer: "False"

        },
        {

            text: "9. Food products received should be labeled properly and clearly. ",

            choices: ["True", "False",],

            correctAnswer: "True"

        },
        {

            text: "10. It is not necessary to verify the quantity of food products received. ",

            choices: ["True", "False",],
            correctAnswer: "False"
        },
        {

            text: "11. All food products received should be checked against the order sheet.",

            choices: ["True", "False"],
            correctAnswer: "True"

        },
        {

            text: "12. It is okay to accept food products that have an off-color or off-smell.",

            choices: ["True", "False"],

            correctAnswer: "False"

        },
        {

            text: "13. Food products received should be from approved and reputable suppliers.",

            choices: ["True", "False"],
            correctAnswer: "True"

        },
        {

            text: "14. It is acceptable to receive food products that have been damaged during transportation.",

            choices: ["True", "False"],
            correctAnswer: "False"

        },
        {

            text: "15. All food products received should be inspected for signs of contamination.",

            choices: ["True", "False"],
            correctAnswer: "True"

        }

    ];
    const handleAnswer = answer => {
        if (questions[currentQuestion].correctAnswer === answer) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };

    const handleSubmit = event => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {

        setShowModal(false);
    };

    if (currentQuestion >= questions.length) {
        return (
            <div>
                <button className="UnitButton" onClick={handleSubmit}>Submit Quiz</button>
                {showModal && (
                    <div className="quiz-container">
                        <div className="result-container">
                            <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
                                <div
                                    style={{
                                        width: '150%',
                                        height: '20px',
                                        backgroundColor: 'lightgray',
                                        borderRadius: '5px',
                                        justifyContent: 'center'
                                    }}
                                >

                                    <div
                                        style={{
                                            width: `${(score / questions.length) * 100}%`,
                                            height: '100%',
                                            backgroundColor: 'green',
                                            borderRadius: '5px',
                                            alignItems: 'center'
                                        }}
                                    />
                                    <div>
                                        <bold>
                                            <p>Your score: {score}/{questions.length}</p>
                                            <p>{score >= (questions.length * 0.73) ? 'Pass' : 'Fail'}</p>
                                        </bold>
                                    </div>
                                    <button className="CloseButton" onClick={handleCloseModal}>Close</button>
                                </div>


                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    const question = questions[currentQuestion];

    return (
        <div className="question-container">
            <h1> Quiz 2</h1>
            <p>.......................................................................................................................................................</p>
            <p >{question.text}</p>
            {question.choices.map(choice => (
                <button className="NextButton" key={choice} onClick={() => handleAnswer(choice)}>
                    {choice}
                </button>
            ))}
        </div>
    );
}

export default C4Quiz2;
