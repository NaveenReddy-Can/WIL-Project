import React, { useState } from "react";
import '../css/Quiz.css';



function C2Quiz1() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [

        {

            text: "1.Food safety is important to protect public health.",

            choices: ["True", "	False ",],

            correctAnswer: "True"

        },

        {

            text: "2.	Cross-contamination is a way to make food more delicious.",

            choices: ["True", "	False ",],

            correctAnswer: "False"

        },

        {

            text: "3.	Food-borne illnesses can cause serious health problems:",

            choices: ["True", "	False ",],

            correctAnswer: "True"

        },

        {

            text: "4.	Food safety regulations should be followed to ensure safe food:",

            choices: ["True", "False ",],

            correctAnswer: "True"

        },

        {

            text: "	5.Washing fruits and vegetables is not necessary.",

            choices: ["True", "	False ",],

            correctAnswer: "False"

        },

        {

            text: "6.	It is safe to taste a food to determine if it is still safe to eat. ",

            choices: ["True", "	False ",],

            correctAnswer: "False"



        },

        {

            text: "7.	Reheating food to a high enough temperature can kill bacteria.",

            choices: ["True", "	False ",],

            correctAnswer: "True"

        },
        {

            text: "8. Keeping food out of the temperature danger zone will prevent food-borne illnesses.",

            choices: ["True", "	False ",],

            correctAnswer: "False"


        },
        {

            text: "9.It is safe to consume food that has passed its expiration date. ",

            choices: ["True", "	False ",],

            correctAnswer: "False"


        },
        {

            text: "10.Food poisoning can be caused by bacteria, viruses, parasites, and toxins.",

            choices: ["True", "	False ",],

            correctAnswer: "False"

        },
        {

            text: "11.	Proper hygiene is important when handling food.",

            choices: ["True", "	False ",],

            correctAnswer: "False"


        },
        {

            text: "12.	Thawing frozen food at room temperature is safe.",

            choices: ["True", "	False ",],

            correctAnswer: "False"

        },
        {

            text: "13.	It is safe to eat food that has been contaminated with chemicals.",

            choices: ["True", "	False ",],

            correctAnswer: "False"

        },
        {

            text: "14.All food should be cooked at the same temperature.",

            choices: ["True", "	False ",],

            correctAnswer: "False"

        },
        {

            text: "15.It is safe to eat food that has been in the 'Danger Zone' for more than 4 hours.",

            choices: ["True", "	False ",],

            correctAnswer: "False"


        },




        // ... additional questions

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
            <h1> Quiz 1</h1>
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

export default C2Quiz1;
