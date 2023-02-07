import React, { useState, useEffect } from "react";
import "./css/home.css";
import FoodSaftey from '../Assets/Images/food_safety.jpg';
import FoodSaftey1 from '../Assets/Images/food-safety.png';
import FoodSaftey2 from '../Assets/Images/food-safety2.jpg';
const Home = () => {
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => {
                console.log("prevIndex: ", prevIndex);
                return (prevIndex + 1) % brandImages.length;
            });
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    const brandImages = [
        {
            id: 1,
            src: { FoodSaftey },
            alt: "Brand 1"
        },
        {
            id: 2,
            src: { FoodSaftey1 },
            alt: "Brand 2"
        },
        {
            id: 3,
            src: { FoodSaftey2 },
            alt: "Brand 3"
        }
    ];
    console.log("index: ", index);
    console.log("brandImages[index]: ", brandImages[index]);


    return (
        <div className="brand-gallery">
            <img
                src={FoodSaftey}
                alt={brandImages[index].alt}
                className="brand-image"
            />

            <div>
                <center>  Welcome To safe Food Handling 🍁 Canada 🍁</center>
            </div>
        </div>

    );
};

export default Home;
