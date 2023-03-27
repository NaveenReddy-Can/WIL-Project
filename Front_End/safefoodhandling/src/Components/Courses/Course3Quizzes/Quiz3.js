import React, { useState } from "react";
import '../css/Quiz.css';



function C3Quiz3() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [

        {

            text: "1.Yelling is an effective way to communicate in a busy kitchen environment true or false?",

            choices: ["True", "	False "],

            correctAnswer: "False"

        },

        {

            text: "2.Good communication in the kitchen helps to prevent accidents and injuries true or false?",

            choices: ["True", "	False "],

            correctAanswer: "True"

        },

        {

            text: "3.It's okay to use foul language in the kitchen as long as it's not directed at anyone true or false?",

            choices: ["True", "	False "],

            correctAnswer: "False"

        },

        {

            text: "4.Criticizing or belittling coworkers is an effective way to motivate them to work harder true or fasle?",

            choices: ["True", "	False "],

            correctAanswer: "False"

        },

        {

            text: "	5.In the kitchen, it's important to communicate clearly and concisely to avoid confusion true or false?",

            choices: ["True", "	False "],

            correctAanswer: "True"

        },

        {

            text: "6.Non-verbal communication, such as hand signals, can be very effective in a noisy kitchen environment true or false?",

            choices: ["True", "	False "],

            correctAnswer: "True"


        },

        {

            text: "7.It's important to take responsibility for your mistakes in the kitchen and communicate them to your coworkers true or false?",

            choices: ["True", "	False "],

            correctAanswer: "True"

        },
        {

            text: "8.It's acceptable to ignore or dismiss the opinions of coworkers who are lower in rank or experience than you true or false?",

            choices: ["True", "	False "],

            correctAnswer: "False"

        },
        {

            text: "9.Effective communication in the kitchen requires a high level of respect and trust among coworkers true or false? ",

            choices: ["True", "	False "],

            correctAnswer: "True"

        },
        {

            text: "10.It's important to communicate any allergies or dietary restrictions to your coworkers and customers in the kitchen true or false?",

            choices: ["True", "	False "],

            correctAnswer: "True"
        },
        {

            text: "11.Providing constructive feedback to coworkers can help improve the quality of the food and service true or false?",

            choices: ["True", "	False "],

            correctAnswer: "True"

        },
        {

            text: "12.It's acceptable to touch food with your bare hands in the kitchen as long as you wash your hands frequently true or false?",

            choices: ["True", "	False "],

            correctAnswer: "False"

        },
        {

            text: "13.Gossiping or spreading rumors about coworkers is an acceptable form of communication in the kitchen true or false?",

            choices: ["True", "	False "],

            correctAnswer: "False"

        },
        {

            text: "14.It's important to communicate any safety concerns or hazards to your coworkers in the kitchen true or false?",

            choices: ["True", "	False "],

            correctAnswer: "True"

        },
        {

            text: "15.Effective communication in the kitchen is essential for creating a positive and productive work environment true or false?",

            choices: ["True", "	False "],

            correctAnswer: "True"

        }




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

export default C3Quiz3;
