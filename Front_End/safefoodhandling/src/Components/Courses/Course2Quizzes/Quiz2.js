import React, { useState } from "react";
import '../css/Quiz.css';



function C2Quiz2() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);


    const questions = [

        {

            text: "1.Hand washing with soap is the most effective way to reduce the spread of germs and illness?",

            choices: ["True", "	False ",],

            correctAnswer: "True"

        },

        {

            text: "2.	Washing your hands with hot water is more effective than cold water?",

            choices: ["True", "	False ",],

            correctAnswer: "True"

        },

        {

            text: "3.	To effectively wash your hands, you should scrub your hands for at least 20 seconds?",

            choices: ["True", "	False ",],

            correctAnswer: "True"

        },

        {

            text: "4.	Hand sanitizer is a substitute for hand washing?",

            choices: ["True", "	False ",],

            correctAnswer: "False"

        },

        {

            text: "	5.Wetting your hands with water is the first step to effectively washing your hands?  ",

            choices: ["True", "	False ",],

            correctAnswer: "True"

        },

        {

            text: "6.	You should dry your hands off with a paper towel or air dryer after washing your hands?  ",

            choices: ["True", "	False ",],

            correctAnswer: "True"



        },

        {

            text: "7.	You should avoid rubbing your hands together when washing them?",

            choices: ["True", "	False ",],

            correctAnswer: "False"

        },
        {

            text: "8. Antibacterial soap is more effective than regular soap for hand washing? ",

            choices: ["True", "	False ",],

            correctAnswer: "True"


        },
        {

            text: "9.You should wash your hands more often when you are sick? ",

            choices: ["True", "	False ",],

            correctAnswer: "True"


        },
        {

            text: "10.You should rub your hands together for at least 20 seconds when washing them.",

            choices: ["True", "	False ",],

            correctAnswer: "True"

        },
        {

            text: "11.	You should use a paper towel to dry your hands after washing them.",

            choices: ["True", "	False ",],

            correctAnswer: "True"


        },
        {

            text: "12.	You should wash your hands for only 10 seconds in the kitchen.",

            choices: ["True", "	False ",],

            correctAnswer: "False"

        },
        {

            text: "13.	It is not necessary to wash your hands after handling raw meat in the kitchen.",

            choices: ["True", "	False ",],

            correctAnswer: "False"

        },
        {

            text: "14. You do not need to wash your hands after handling cooked food. ",

            choices: ["True", "	False ",],

            correctAnswer: "False"

        },
        {

            text: "15.It is not necessary to rinse hands after washing in the kitchen.",

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

export default C2Quiz2;
