import React, { useState } from "react";
import '../css/Quiz.css';



function C3Quiz1() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [

        {

            text: "1.An employee must report any illness or injury to their employer true or false?",

            choices: ["True", "	False "],

            correctAnswer: "True"

        },

        {

            text: "2.An employer is not responsible for providing workers' compensation to employees who are injured on the job true or false?",

            choices: ["True", "	False "],

            correctAanswer: "False"

        },

        {

            text: "3.All employees are eligible for workers' compensation regardless of their position or length of employment true or false?",

            choices: ["True", "	False "],

            correctAnswer: "True"

        },

        {

            text: "4.An employee can be fired for reporting an injury or illness to their employer true or fasle?",

            choices: ["True", "	False "],

            correctAanswer: "False"

        },

        {

            text: "	5.Employees are responsible for covering the cost of their medical treatment for work-related injuries true or false?",

            choices: ["True", "	False "],

            correctAanswer: "False"

        },

        {

            text: "6.An employer is required by law to provide a safe working environment for their employees true or false?",

            choices: ["True", "	False "],

            correctAnswer: "True"


        },

        {

            text: "7.An employee must receive approval from their employer before seeking medical treatment for a work-related injury true or false?",

            choices: ["True", "	False "],

            correctAanswer: "False"

        },
        {

            text: "8.Employees have the right to request an inspection of their workplace if they believe it is unsafe true or false?",

            choices: ["True", "	False "],

            correctAnswer: "True"

        },
        {

            text: "9.It is the responsibility of the employee to file a workers' compensation claim in a timely manner true or false? ",

            choices: ["True", "	False "],

            correctAnswer: "True"

        },
        {

            text: "10.Workers' compensation benefits cover lost wages for the duration of the employee's recovery period true or false?",

            choices: ["True", "	False "],

            correctAnswer: "True"
        },
        {

            text: "11.An employer can deny a workers' compensation claim if the employee was under the influence of drugs or alcohol at the time of the injury true or false?",

            choices: ["True", "	False "],

            correctAnswer: "True"

        },
        {

            text: "12.An employee can sue their employer for a work-related injury true or false?",

            choices: ["True", "	False "],

            correctAnswer: "False"

        },
        {

            text: "13.An employer can be fined for failing to provide a safe working environment for their employees true or false?",

            choices: ["True", "	False "],

            correctAnswer: "True"

        },
        {

            text: "14.An employee can receive both workers' compensation benefits and social security disability benefits for the same injury true or false?",

            choices: ["True", "	False "],

            correctAnswer: "True"

        },
        {

            text: "15.An employer is not required to make any accommodations for an employee who has a work-related injury or illness true or false?",

            choices: ["True", "	False "],

            correctAnswer: "False"

        }




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

export default C3Quiz1;
