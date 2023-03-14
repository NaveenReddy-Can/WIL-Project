import React, { useState } from "react";
import '../css/Quiz.css';



function Quiz1() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [

        {

            text: "1.	Food products should be stored to avoid possible cross contamination: ",

            choices: ["True", "False"],

            correctAnswer: "True"

        },

        {

            text: '2.2.	They should be stored at least how many inches off the floor: ',

            choices: ['2 inches', '4 inches', '6 inches', '8 inches'],

            correctAanswer: '6 inches'

        },

        {

            text: "3.Meet products and raw food should be stored all way down below ready to eat foods:",

            choices: ["True", "False"],

            correctAnswer: "True "

        },

        {

            text: "4.Ready to eat food should be stored at 26 C for 4 days:",

            choices: ["True", "False"],

            correctAnswer: "False"

        },

        {

            text: "	5.	TCS stands for:",

            choices: ["Time control safety", "	Time count safety", "Temperature control safety", "Temperature count safety"],

            correctAnswer: "Temperature control safety"

        },

        {

            text: "6.	Cans that are swollen, boxes with watermarks, frozen foods with water crystal should be: ",

            choices: ["Accepted", "Rejected", "No difference", "All the above"],

            correctAnswer: "Rejected "

        },

        {

            text: "7.	Thermometer should be between 30-34 degree F: ",

            choices: ["True", "False"],

            correctAnswer: "True"

        },
        {

            text: "8.	Food handler card is not always required:  ",

            choices: ["True", "False"],

            correctAnswer: "False"

        },
        {

            text: "9.	Gloves should be used every time when working in the kitchen:",

            choices: ["True", "False"],

            correctAnswer: "True"

        },
        {

            text: "10.	Always sanitize the stations in the kitchen with:  ",

            choices: ["Water", "Sanitizer", "Detergent", "all the above"],

            correctAnswer: "Sanitizer"

        },
        {

            text: "11. Infection is caused by contaminated foods.  ",

            choices: ["True", "False"],

            correctAnswer: "True"

        },
        {

            text: "12.Employees are properly trained in their specific food handling duties.  ",

            choices: ["True", "False"],

            correctAnswer: "True"

        },
        {

            text: "13. Germs that cause foodborne illness are on our hands. ",

            choices: ["True", "False"],

            correctAnswer: "True"

        },
        {

            text: "14. Handwash should be washed at least 5 minutes.",

            choices: ["True", "False"],

            correctAnswer: "False"

        },
        {

            text: "15.Touch ready-to-eat foods with your bare hands. ",

            choices: ["True", "False"],

            correctAnswer: "True"

        },
        {

            text: "16.Clean food handlers must wear artificial fingernails bracelets",

            choices: ["True", "False"],

            correctAnswer: "False"

        },
        {

            text: "17. It is correct method to scratch their skin to avoid possible contamination of food  ",

            choices: ["True", "False"],

            correctAnswer: "False"

        },
        {

            text: "18.Never try to catch knife when it is falling. ",

            choices: ["True", "False"],

            correctAnswer: "True"

        },
        {

            text: "19. Gloves must always be removed or changed after touching raw animal foods, garbage, walls, and floor   ",

            choices: ["True", "False"],

            correctAnswer: "True"

        },
        {

            text: "20. Diseases that can be transmitted by contaminated food are salmonella, shigella and norovirus ",

            choices: ["True", "False"],

            correctAnswer: "True"

        },
        {

            text: "21.You can remove all listeria by washing a cantaloupe.",

            choices: ["True ", " False "],

            correctAnswer: "False "

        },

        {

            text: "22.Refrigerators must keep food of an internal temperature of 41 degrees  ",

            choices: ["True ", " False "],

            correctAnswer: "True"

        },

        {

            text: "23.Person in charge must be informed sanitizer buckets with towels must always be available to employees.  ",

            choices: ["True", " False "],

            correctAnswer: "True"

        },

        {

            text: "24.Utensils and dirty equipment should always be kept separate to avoid cross-contamination.    ",

            choices: ["True", " False "],

            correctAnswer: "True"

        },

        {

            text: "25.Bacteria can cause illness if the product is left in the danger zone.    ",

            choices: ["True", " False "],

            correctAnswer: "True"

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

export default Quiz1;
