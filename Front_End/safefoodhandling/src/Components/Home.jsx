import React, { useState, useEffect } from "react";
import "./css/home.css";
import FoodSaftey from "../Assets/Images/food_safety.jpg";
import FoodSaftey1 from "../Assets/Images/food-safety.png";
import FoodSaftey2 from "../Assets/Images/food-safety2.jpg";
const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
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
      alt: "Brand 1",
    },
    {
      id: 2,
      src: { FoodSaftey1 },
      alt: "Brand 2",
    },
    {
      id: 3,
      src: { FoodSaftey2 },
      alt: "Brand 3",
    },
  ];
  console.log("index: ", index);
  console.log("brandImages[index]: ", brandImages[index]);

  return (
    <div className="brand-gallery">
      <div className="brand-images">
        <img
          src={FoodSaftey}
          alt={brandImages[index].alt}
          className="brand-image"
        />
      </div>
      <div className="brand-text">
        <center> Welcome To Safe Food Handling 🍁 Canada 🍁</center>
      </div>
      <div className="contenthome">
        <h3>Welcome to SafeFoodHandling! </h3>
        <p>
          Our mission is to promote safe and responsible food handling practices
          for all individuals and businesses. We believe that everyone deserves
          to eat food that is not only delicious, but also safe to consume.
        </p>

        <p>
          At SafeFoodHandling, we offer a variety of resources to help you learn
          about proper food handling techniques, including articles, videos, and
          tutorials. We also provide training courses for food handlers,
          managers, and other industry professionals to help ensure that your
          food service establishment is in compliance with all relevant
          regulations.
        </p>

        <p>
          Our website is designed with user experience in mind. We've created an
          easy-to-use interface that allows you to quickly find the information
          you need. Whether you're a food industry professional or just looking
          to learn more about safe food handling practices, we've got you
          covered.
        </p>
        <p>Some of the key features of our website include:</p>
        <ul>
          <li>
            Articles and Videos: Our extensive library of articles and videos
            covers a wide range of topics related to food safety and handling.
          </li>
          <li>
            Training Courses: We offer online training courses that are designed
            to meet the needs of food industry professionals. Our courses are
            interactive and engaging, and cover topics such as foodborne illness
            prevention, proper handwashing techniques, and more.
          </li>
          <li>
            Resources: We've compiled a variety of resources to help you stay
            up-to-date on the latest food safety regulations and guidelines. Our
            resource library includes links to relevant government websites,
            industry associations, and more.
          </li>
        </ul>
        <p>
          Thank you for choosing SafeFoodHandling as your go-to resource for
          safe and responsible food handling practices. We're committed to
          helping you keep your customers safe and healthy, and we look forward
          to working with you!
        </p>
      </div>
      <div className="popular-videos">
        <h2>Courses On Trending </h2>
        <div className="video-grid">
          <div className="video-row">
            <div className="video-column">
              <video src="video1.mp4" controls />
              <p>Video 1 description</p>
            </div>
            <div className="video-column">
              <video src="video2.mp4" controls />
              <p>Video 2 description</p>
            </div>
            <div className="video-column">
              <video src="video3.mp4" controls />
              <p>Video 3 description</p>
            </div>
            <div className="video-column">
              <video src="video4.mp4" controls />
              <p>Video 4 description</p>
            </div>
          </div>
          <div className="video-row">
            <div className="video-column">
              <video src="video5.mp4" controls />
              <p>Video 5 description</p>
            </div>
            <div className="video-column">
              <video src="video6.mp4" controls />
              <p>Video 6 description</p>
            </div>
            <div className="video-column">
              <video src="video7.mp4" controls />
              <p>Video 7 description</p>
            </div>
            <div className="video-column">
              <video src="video8.mp4" controls />
              <p>Video 8 description</p>
            </div>
          </div>
          <div className="video-row">
            <div className="video-column">
              <video src="video9.mp4" controls />
              <p>Video 9 description</p>
            </div>
            <div className="video-column">
              <video src="video10.mp4" controls />
              <p>Video 10 description</p>
            </div>
            <div className="video-column">
              <video src="video11.mp4" controls />
              <p>Video 11 description</p>
            </div>
            <div className="video-column">
              <video src="video12.mp4" controls />
              <p>Video 12 description</p>
            </div>
          </div>
          <div className="video-row">
            <div className="video-column">
              <video src="video13.mp4" controls />
              <p>Video 13 description</p>
            </div>
            <div className="video-column">
              <video src="video14.mp4" controls />
              <p>Video 14 description</p>
            </div>
            <div className="video-column">
              <video src="video15.mp4" controls />
              <p>Video 15 description</p>
            </div>
            <div className="video-column">
              <video src="video16.mp4" controls />
              <p>Video 16 description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
