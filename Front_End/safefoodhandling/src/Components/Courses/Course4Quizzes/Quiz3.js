import React, { useState } from "react";
import '../css/Quiz.css';



function C4Quiz3() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [

        {

            text: "1. It is okay to store different types of foods together in the refrigerator.",

            choices: ["True", "False",],

            correctAnswer: "False"

        },

        {

            text: "2. Canned foods do not have an expiration date, so they can be stored indefinitely.",

            choices: ["True", "False",],

            correctAanswer: "False"

        },

        {

            text: "3. Raw meat should be stored on the top shelf of the refrigerator.",

            choices: ["True", "False",],

            correctAnswer: "False"

        },

        {

            text: "4. It is safe to eat food that has been left out of the refrigerator for more than 2 hours.",

            choices: ["True", "False",],

            correctAnswer: "False"

        },

        {

            text: "5. Fruits and vegetables should be stored separately in the refrigerator.",

            choices: ["True", "False",],

            correctAnswer: "True"

        },

        {

            text: "6. It is safe to store food in any type of plastic container.",

            choices: ["True", "False",],

            correctAnswer: "False"


        },

        {

            text: "7. Leftovers should be stored in shallow containers to cool more quickly.",

            choices: ["True", "False",],

            correctAnswer: "True"

        },
        {

            text: "8. Frozen food can be safely refrozen if it has been thawed in the refrigerator.",

            choices: ["True", "False",],

            correctAnswer: "False"

        },
        {

            text: "9. Eggs should be stored in their original carton in the refrigerator.",

            choices: ["True", "False",],

            correctAnswer: "True"

        },
        {

            text: "10. It is okay to store bread in the refrigerator.",

            choices: ["True", "False",],
            correctAnswer: "False"
        },
        {

            text: "11. Cooked food should be stored in airtight containers to prevent contamination.",

            choices: ["True", "False"],
            correctAnswer: "True"

        },
        {

            text: "12. Potatoes should be stored in the refrigerator",

            choices: ["True", "False"],

            correctAnswer: "False"

        },
        {

            text: "13. It is safe to store food in open cans in the refrigerator.",

            choices: ["True", "False"],
            correctAnswer: "False"

        },
        {

            text: "14. Butter should be stored in the refrigerator.",

            choices: ["True", "False"],
            correctAnswer: "True"

        },
        {

            text: "15. Dry goods, such as pasta and rice, should be stored in the refrigerator to extend their shelf life.",

            choices: ["True", "False"],
            correctAnswer: "False"

        }

    ];


    // ... additional questions




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
                <button className="SubmitQuizButton" onClick={handleSubmit}>Submit Quiz</button>
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
            <h1> Quiz 3</h1>
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

export default C4Quiz3;
