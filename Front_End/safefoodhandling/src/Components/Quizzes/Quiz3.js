import React, { useState } from "react";
import '../css/Quiz.css';



function Quiz3() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [

        {

            text: "1.If your knife is falling to the floor, stand back and: ",

            choices: ["	Try to catch it", "	Let it fall", "Keep your hand below"],

            correctAnswer: "Let it fall"

        },

        {

            text: '2.	When getting out sharp knives you should hold them: ',

            choices: ['	Pointing towards the ground ', '	With both hands', '	Catch on opposite ends'],

            correctAanswer: 'Pointing towards the ground'

        },

        {

            text: "3.	After you finish using the knife, how should you place it:",

            choices: ["	Sharp edge towards our side", "	Sharp edge towards opposite side", "	No matter how you place it"],

            correctAnswer: "Sharp edge towards opposite side"

        },

        {

            text: "4.	we can send knives through the dishwasher :",

            choices: ["True", "False"],

            correctAnswer: "False"

        },

        {

            text: "	5.	while carrying the knives you should indicate other people:",

            choices: ["True", "False"],

            correctAnswer: "True"

        },

        {

            text: "6.	We should sharpen our knives regularly because: ",

            choices: ["	It does not rust", "It can cut easily.", "Both a&b"],

            correctAnswer: "Both a&b"

        },

        {

            text: "7.	We have different knives for different things: ",

            choices: ["True", "False"],

            correctAnswer: "True"

        },
        {

            text: "8.	Knives should be sanitized after every use  ",

            choices: ["True", "False"],

            correctAnswer: "True"

        },
        {

            text: "9.	Always keep the knives back into the stand after use:",

            choices: ["True", "False"],

            correctAnswer: "True"

        },
        {

            text: "10.	What is the proper grip for holding a knife?        :  ",

            choices: ["With fingers extended", "With fingers wrapped around the handle", "With only the fingertips touching the handle"],

            correctAnswer: "With fingers wrapped around the handle"

        },
        {

            text: "11.	How should you pass a knife to someone else  ",

            choices: ["Handle first", "Blade first", "It doesn't matter"],

            correctAnswer: "Handle first"

        },
        {

            text: "12.	When cutting food, it is best to  ",

            choices: ["Hold the food with your fingers", "	Use a cutting board", "Cut on any surface that is available"],

            correctAnswer: "Use a cutting board"

        },
        {

            text: "13.	Which of the following is NOT a good practice when using a knife? ",

            choices: ["Using a dull knife", "Cutting towards yourself", "Paying attention to what you are doing"],

            correctAnswer: "Cutting towards yourself"

        },
        {

            text: "14.	When cleaning a knife, it is important to: ",

            choices: ["Wash the blade and handle with warm soapy water", "Scrub the blade with a metal scouring pad", "Store the knife while it is still wet"],

            correctAnswer: "	Wash the blade and handle with warm soapy water"

        },
        {

            text: "15.	Which type of cutting motion is the safest?     ",

            choices: ["A back-and-forth sawing motion", "	A chopping motion ", "A rocking motion"],

            correctAnswer: "	A rocking motion"

        },
        {

            text: "16.	What is the proper way to hold a knife?",

            choices: ["	with your fingers wrapped around the handle", "with your fingers wrapped around the blade", "	with your thumb and forefinger gripping the base of the blade, and the other fingers wrapping around the handle"],

            correctAnswer: "with your thumb and forefinger gripping the base of the blade, and the other fingers wrapping around the handle"

        },
        {

            text: "17.	When using a knife, where should you position your non-knife hand?  ",

            choices: ["holding the food directly in front of the knife blade", "holding the food off to the side of the knife blade", "	holding the food above the knife blade"],

            correctAnswer: "holding the food off to the side of the knife blade"

        },
        {

            text: "18.	Which of the following is a safe way to transport knives? ",

            choices: ["in your pocket or waistband", "	in a knife block or sheath", "	loose in a backpack or bag"],

            correctAnswer: "in a knife block or sheath"

        },
        {

            text: "19.	When sharpening a knife, you should:  ",

            choices: ["sharpen both sides of the blade evenly", "only sharpen one side of the blade", "use a dull knife to sharpen a sharp one"],

            correctAnswer: "sharpen both sides of the blade evenly"

        },
        {

            text: "20.	It's safe to use a knife to open packages or cut through materials other than food.",

            choices: ["True", "False"],

            correctAnswer: "False"

        },
        {

            text: "21.	Which of the following should you do if you cut yourself while using a knife?   ",

            choices: ["	rinse the wound with cold water and apply pressure ", " continue working and hope the bleeding stops on its own ", "ignore the cut and keep using the knife"],

            correctAnswer: "rinse the wound with cold water and apply pressure "

        },

        {

            text: "22.	Which of the following is a safe cutting technique?     ",

            choices: ["chopping with the tip of the blade ", "rocking the blade back and forth to chop ", "using a sawing motion to cut through food"],

            correctAnswer: "rocking the blade back and forth to chop"

        },

        {

            text: "23.	can we throw knives in the air to pass it other person?  ",

            choices: ["True", " False "],

            correctAnswer: "False "

        },

        {

            text: "24.	handling knife with safe tips   ",

            choices: ["True", " False "],

            correctAnswer: "True"

        },

        {

            text: "25.	always be careful with knives   ",

            choices: ["True", " False "],

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

export default Quiz3;
