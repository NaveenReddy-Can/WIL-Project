import React, { useState } from "react";
import '../css/Quiz.css';



function C3Quiz2() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);




    const questions = [

        {

            text: "1.A food processor is a useful kitchen appliance for slicing, chopping, and pureeing ingredients true or false?",

            choices: ["True", "	False "],

            correctAnswer: "True"

        },

        {

            text: "2.An immersion blender is also known as a hand blender and is useful for blending soups and sauces true or false?",

            choices: ["True", "	False "],

            correctAanswer: "True"

        },

        {

            text: "3.A stand mixer is only used for baking and cannot be used for other cooking tasks true or false?",

            choices: ["True", "	False "],

            correctAnswer: "False"

        },

        {

            text: "4.A double boiler is used for cooking delicate sauces and melting chocolate without burning it true or fasle?",

            choices: ["True", "	False "],

            correctAanswer: "True"

        },

        {

            text: "	5.A pressure cooker is used for slow cooking meats and vegetables true or false?",

            choices: ["True", "	False "],

            correctAanswer: "False"

        },

        {

            text: "6.An oven thermometer is used to check the temperature inside the oven true or false?",

            choices: ["True", "	False "],

            correctAnswer: "True"


        },

        {

            text: "7.A silicone baking mat can be used instead of parchment paper for baking true or false?",

            choices: ["True", "	False "],

            correctAanswer: "True"

        },
        {

            text: "8.A colander is used for draining pasta and vegetables true or false?",

            choices: ["True", "	False "],

            correctAnswer: "True"

        },
        {

            text: "9.A mortar and pestle is used for grinding spices and herbs true or false? ",

            choices: ["True", "	False "],

            correctAnswer: "True"

        },
        {

            text: "10.A food scale is only necessary for professional chefs and not necessary for home cooks true or false?",

            choices: ["True", "	False "],

            correctAnswer: "False"
        },
        {

            text: "11.A garlic press is used for mincing garlic true or false?",

            choices: ["True", "	False "],

            correctAnswer: "True"

        },
        {

            text: "12.A wok is primarily used for baking true or false?",

            choices: ["True", "	False "],

            correctAnswer: "False"

        },
        {

            text: "13.A mandoline is used for slicing vegetables and fruits evenly true or false?",

            choices: ["True", "	False "],

            correctAnswer: "True"

        },
        {

            text: "14.A Dutch oven is a type of slow cooker true or false?",

            choices: ["True", "	False "],

            correctAnswer: "False"

        },
        {

            text: "15.A pastry blender is used for blending flour and sugar true or false?",

            choices: ["True", "	False "],

            correctAnswer: "True"

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

export default C3Quiz2;
