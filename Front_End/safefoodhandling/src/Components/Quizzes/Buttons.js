import React, { useState } from 'react';
import Quiz1 from './Quiz1';
import Quiz2 from './Quiz2';
import Quiz3 from './Quiz3';
import Quiz4 from './Quiz4';
import '../css/Buttons.css';


const Buttons = () => {
    const [componentToRender, setComponentToRender] = useState(null);

    const handleClick = (component) => {
        setComponentToRender(component);
    };

    const renderComponent = () => {
        switch (componentToRender) {
            case 'componentOne':
                return <Quiz1 />;
            case 'componentTwo':
                return <Quiz2 />;
            case 'componentThree':
                return <Quiz3 />;
            case 'componentFour':
                return <Quiz4 />;
            default:
                return null;
        }
    };

    return (
        <div className='QuizButtonComponent'>
            <center>
                <button className='QButtons' onClick={() => handleClick('componentOne')}>Quiz 1</button>
                <button className='QButtons' onClick={() => handleClick('componentTwo')}>Quiz 2</button>
                <button className='QButtons' onClick={() => handleClick('componentThree')}>Quiz 3</button>
                <button className='QButtons' onClick={() => handleClick('componentFour')}>Quiz 4</button>
            </center>
            {renderComponent()}
        </div>
    );
};

export default Buttons;