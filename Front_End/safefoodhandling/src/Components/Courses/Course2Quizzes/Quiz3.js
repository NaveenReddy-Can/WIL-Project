import React, { useState } from "react";
import '../css/Quiz.css';



function C2Quiz3() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [

        {

            text: "1.Washing your hands thoroughly with soap and warm water for at least 20 seconds before handling food is an important step in maintaining good personal hygiene in the kitchen. ",

            choices: ["True", "	False ",],

            correctAnswer: "True"

        },

        {

            text: "2.	It is safe to thaw frozen meat on the kitchen counter at room temperature. ",

            choices: ["True", "	False ",],

            correctAnswer: "False"


        },

        {

            text: "3.	Wearing gloves is always necessary when handling food in the kitchen. ",

            choices: ["True", "	False ",],

            correctAnswer: "False"


        },

        {

            text: "4. It is safe to eat food that has been left out at room temperature for several hours. ",

            choices: ["True", "	False ",],

            correctAnswer: "False"


        },

        {

            text: "	5. It is important to regularly clean and sanitize cutting boards and other kitchen surfaces to prevent the spread of bacteria and other harmful pathogens.  ",

            choices: ["True", "	False ",],

            correctAnswer: "True"


        },

        {

            text: "6. It is safe to use the same cutting board for different types of food (e.g. raw meat and vegetables) as long as you clean it between uses. ",

            choices: ["True", "	False ",],

            correctAnswer: "False"




        },

        {

            text: "7.	You should always wash fruits and vegetables under running water before consuming or cooking them. ",

            choices: ["True", "	False ",],

            correctAnswer: "True"

        },
        {

            text: "8. It is safe to reuse the same sponge for washing dishes multiple times without cleaning or sanitizing it.  ",

            choices: ["True", "	False ",],

            correctAnswer: "False"



        },
        {

            text: "9.It is okay to taste food with the same spoon you are using to cook with. ",

            choices: ["True", "	False ",],

            correctAnswer: "False"



        },
        {

            text: "10.Drinking from a glass while cooking in the kitchen is okay. ",

            choices: ["True", "	False ",],

            correctAnswer: "False"


        },
        {

            text: "11.	It is important to cover your nose and mouth when coughing or sneezing in the kitchen. ",

            choices: ["True", "	False ",],

            correctAnswer: "True"



        },
        {

            text: "12.	It is safe to use expired food items as long as they don't smell bad. ",

            choices: ["True", "	False ",],

            correctAnswer: "False"

        },
        {

            text: "13.	It is important to keep the kitchen clean and free of clutter to prevent accidents. ",

            choices: ["True", "	False ",],

            correctAnswer: "True"

        },
        {

            text: "14.It is safe to store cooked and raw foods together in the same container in the refrigerator. ",

            choices: ["True", "	False ",],

            correctAnswer: "False"

        },
        {

            text: "15.It is important to wash your hands after handling raw meat, poultry, or seafood to prevent the spread of harmful bacteria. ",

            choices: ["True", "	False ",],

            correctAnswer: "True"



        },




        // ... additional questions

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

export default C2Quiz3;
