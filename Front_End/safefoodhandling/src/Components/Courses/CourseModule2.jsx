import React, { useState } from "react";
import "../css/CourseModule1.css";
import { useNavigate } from "react-router-dom";

const CourseModule2 = () => {
  const [activeUnit, setActiveUnit] = useState(1);
  const [completedUnits, setCompletedUnits] = useState([]);
  const [isExpanded, setIsExpanded] = useState([false, false, false]);
  const history = useNavigate();
  const toggleExpand = (index) => {
    setIsExpanded((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const handleClick = () => {
    const newTab = window.open("", "_blank");
    newTab.location.href = "/quiz1";
  };
  const handleClick2 = () => {
    const newTab = window.open("", "_blank");
    newTab.location.href = "/quiz2";
  };
  const handleClick3 = () => {
    const newTab = window.open("", "_blank");
    newTab.location.href = "/quiz3";
  };
  const handleClick4 = () => {
    const newTab = window.open("", "_blank");
    newTab.location.href = "/quiz4";
  };

  const handleClickfinal = () => {
    const newTab = window.open("", "_blank");
    newTab.location.href = "/quiz1";
  };

  const handleUnitClick = (unit) => {
    setActiveUnit(unit);
  };
  const handleUnitCertificate = (certificate) => {
    setActiveUnit(certificate);
    const newTab = window.open("", "_blank");
    newTab.location.href = "/certificate";
    history.push("/CourseModule");
  };
  const handleQuizSubmit = (unit) => {
    const updatedCompletedUnits = [...completedUnits];
    if (unit === 2) {
      // Update pass percentage for unit 2
      const passPercentage = 70;
      const quizScore = 78; // get quiz score
      if (quizScore >= passPercentage) {
        updatedCompletedUnits.push(unit);
      }
    } else if (unit === 3) {
      // Update pass percentage for unit 3
      const passPercentage = 70;
      const quizScore = 78; // get quiz score
      if (quizScore >= passPercentage) {
        updatedCompletedUnits.push(unit);
      }
    } else if (unit === 4) {
      // Update pass percentage for unit 4
      const passPercentage = 70;
      const quizScore = 88; // get quiz score
      if (quizScore >= passPercentage) {
        updatedCompletedUnits.push(unit);
      }
    }
    setCompletedUnits(updatedCompletedUnits);
  };

  const isUnitCompleted = (unit) => {
    return completedUnits.includes(unit);
  };

  const isUnitOpen = (unit) => {
    return unit <= activeUnit;
  };

  return (
    <div className="CourseModule">
      <ul>
        <li className={activeUnit === 1 ? "active" : ""}>
          <button
            className="UnitButton"
            onClick={() => handleUnitClick(1)}
            disabled={!isUnitOpen(1)}
          >
            Unit 1: Introduction and Getting to Know the Program
          </button>
          {activeUnit === 1 && isUnitOpen(1) && (
            <ul>
              <li>
                <button className="ChangeProfileButton">
                  Changing your profile
                </button>
              </li>
              <li>
                <button className="AssesmentButton">Assessments </button>
              </li>
              <li>
                <button
                  className="NextButton"
                  onClick={() => handleUnitClick(2)}
                  disabled={isUnitCompleted(1)}
                >
                  Click here to enter - Unit 2: Food Safety
                </button>
              </li>
            </ul>
          )}
        </li>
        <li className={activeUnit === 2 ? "active" : ""}>
          <button
            className="UnitButton"
            onClick={() => handleUnitClick(2)}
            disabled={!isUnitOpen(2) || isUnitCompleted(2)}
          >
            Unit 2: Food Safety
          </button>
          {activeUnit === 2 && isUnitOpen(2) && (
            <div className="expandable-div">
              <div className="scroll">
                <h2 onClick={() => toggleExpand(0)}>
                  <center>Food Safety</center>
                </h2>
                <div
                  className={`expandable-content ${
                    isExpanded[0] ? "expanded" : "collapsed"
                  }`}
                >
                  <ul>
                    <div className="container1">
                      <iframe
                        title="frame1"
                        className="responsive-iframe"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                      ></iframe>
                    </div>

                    <ol>
                      <p>
                        Food safety is an important part of any food service
                        operation. It helps to ensure that the food that is
                        served is free of contaminants and safe for consumption.
                        Food safety is important to protect the health of
                        consumers, reduce food waste, and ensure that food is
                        properly handled and prepared. It also helps to protect
                        businesses from legal issues related to food poisoning.
                        :
                      </p>
                      <li>
                        1. Proper Food Handling: All food should be handled in a
                        safe and sanitary manner. This includes proper storage,
                        preparation, and cooking temperatures, as well as proper
                        sanitation methods for food preparation surfaces and
                        equipment.
                      </li>
                      <li>
                        2. Food Safety Training: All food service employees
                        should be properly trained in food safety. This should
                        include basic food safety concepts such as safe food
                        handling practices and proper food storage.
                      </li>
                      <li>
                        3. Cleanliness: All food service areas should be kept
                        clean and free of contaminants. This includes regular
                        cleaning of all food preparation surfaces, equipment,
                        and utensils.
                      </li>
                    </ol>
                    <li>
                      <button
                        className="QuizButton"
                        onClick={() => (handleClick(), handleQuizSubmit(2))}
                      >
                        Unit 2 Quiz button
                      </button>
                    </li>
                    <li>
                      <button
                        className="NextButton"
                        onClick={() => handleUnitClick(3)}
                        disabled={!isUnitCompleted(2)}
                      >
                        Click here to enter - Unit 3: Hand Washing
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>
        <li className={activeUnit === 3 ? "active" : ""}>
          <button
            className="UnitButton"
            onClick={() => handleUnitClick(3)}
            disabled={!isUnitOpen(3) || isUnitCompleted(3)}
          >
            Unit 3: Hand Washing
          </button>
          {activeUnit === 3 && isUnitOpen(3) && (
            <div className="expandable-div">
              <h2 onClick={() => toggleExpand(0)}>
                <center>Hand Washing</center>
              </h2>
              <div
                className={`expandable-content ${
                  isExpanded[0] ? "expanded" : "collapsed"
                }`}
              >
                <ul>
                  <div className="container1">
                    <iframe
                      title="frame2"
                      className="responsive-iframe"
                      src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    ></iframe>
                  </div>

                  <ol>
                    <p>
                      Hand washing is an important part of personal hygiene. It
                      is an effective way to prevent the spread of germs and
                      protect yourself and others from illnesses. Here are three
                      points to consider when it comes to the importance of hand
                      washing:
                    </p>
                    <li>
                      1. Hand washing prevents the spread of disease: By washing
                      your hands with soap and water, you can reduce the number
                      of germs on your hands and reduce the spread of infectious
                      diseases.
                    </li>
                    <li>
                      2. Hand washing helps to maintain personal hygiene:
                      Washing your hands regularly will help to keep them clean
                      and free of germs. This will help to maintain your
                      personal hygiene and keep your hands feeling fresh.
                    </li>
                    <li>
                      3. Hand washing can reduce the risk of infection: Regular
                      hand washing can reduce the risk of infection from
                      bacteria and viruses. This is especially important for
                      those in high-risk areas, such as hospitals, where the
                      risk of infectious diseases is higher.{" "}
                    </li>
                  </ol>
                  <li>
                    <button
                      className="QuizButton"
                      onClick={() => (handleClick2(), handleQuizSubmit(3))}
                    >
                      Unit 3 Quiz button
                    </button>
                  </li>
                  <li>
                    <button
                      className="NextButton"
                      onClick={() => handleUnitClick(4)}
                      disabled={!isUnitCompleted(3)}
                    >
                      Click here to enter - Unit 4: Personal Hygiene
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </li>
        <li className={activeUnit === 4 ? "active" : ""}>
          <button
            className="UnitButton"
            onClick={() => handleUnitClick(4)}
            disabled={!isUnitOpen(4) || isUnitCompleted(4)}
          >
            Unit 4: Personal Hygiene
          </button>
          {activeUnit === 4 && isUnitOpen(4) && (
            <div className="expandable-div">
              <h2 onClick={() => toggleExpand(0)}>
                <center> Personal Hygiene</center>
              </h2>
              <div
                className={`expandable-content ${
                  isExpanded[0] ? "expanded" : "collapsed"
                }`}
              >
                <ul>
                  <div className="container1">
                    <iframe
                      title="frame3"
                      className="responsive-iframe"
                      src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    ></iframe>
                  </div>

                  <ol>
                    <p>
                      Personal hygiene in the kitchen is the practice of
                      maintaining cleanliness and sanitation in the kitchen.
                      This includes proper handwashing, wearing protective
                      clothing, sanitizing surfaces, and avoiding
                      cross-contamination. :
                    </p>
                    <li>
                      1. Proper Handwashing: Wash your hands with warm water and
                      soap for at least 20 seconds before and after handling
                      food, when switching between tasks, and after using the
                      bathroom.
                    </li>
                    <li>
                      2. Protective Clothing: Wear protective clothing such as
                      an apron and/or gloves to prevent cross-contamination.
                    </li>
                    <li>
                      3. Sanitizing Surfaces: Clean and sanitize cutting boards,
                      countertops, utensils, and other surfaces to prevent the
                      spread of germs and bacteria.
                    </li>
                  </ol>
                  <li>
                    <button
                      className="QuizButton"
                      onClick={() => (handleClick3(), handleQuizSubmit(4))}
                    >
                      Unit 4 Quiz button
                    </button>
                  </li>
                  <li>
                    <button
                      className="NextButton"
                      onClick={() => handleUnitClick(5)}
                      disabled={!isUnitCompleted(4)}
                    >
                      Click here to enter - Unit 5: Final Assessment
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </li>
        <li className={activeUnit === 5 ? "active" : ""}>
          <button
            className="UnitButton"
            onClick={() => handleUnitClick(5)}
            disabled={!isUnitOpen(5) || isUnitCompleted(5)}
          >
            Unit 5: Final Assesment
          </button>
          {activeUnit === 5 && isUnitOpen(5) && (
            <div className="expandable-div">
              <h2 onClick={() => toggleExpand(0)}>
                <center>Final Assesment</center>
              </h2>
              <div
                className={`expandable-content ${
                  isExpanded[0] ? "expanded" : "collapsed"
                }`}
              >
                <ul>
                  <li>Your content video</li>
                  <ol>
                    <p>
                      Raw meat is a potential source of foodborne illness if not
                      handled properly. It is important to follow safe handling
                      practices to ensure that the meat is safe to consume. Here
                      are some key points and paragraphs about safe handling of
                      raw meat:
                    </p>
                    <li>
                      Importance of safe handling of raw meat: Raw meat can
                      contain harmful bacteria such as Salmonella, E. coli, and
                      Campylobacter that can cause foodborne illness. Handling
                      raw meat properly is crucial for preventing the spread of
                      these bacteria and ensuring that the meat is safe to
                      consume.
                    </li>
                    <li>
                      Techniques for safe handling of raw meat: There are
                      several techniques that can be used to handle raw meat
                      safely. Firstly, always wash hands thoroughly with soap
                      and water before and after handling raw meat. Secondly,
                      use separate cutting boards, utensils, and container1s for
                      raw meat and other foods to prevent cross-contamination.
                      Thirdly, keep raw meat refrigerated until ready to use,
                      and cook it to the appropriate internal temperature to
                      kill any harmful bacteria.
                    </li>
                    <li>
                      Benefits of safe handling of raw meat: Safe handling of
                      raw meat has several benefits, including preventing
                      foodborne illness and ensuring that the meat is safe to
                      consume. By following safe handling practices, kitchen
                      staff can work more efficiently and effectively, leading
                      to improved productivity and potentially higher customer
                      satisfaction.
                    </li>
                    <li>
                      Challenges of safe handling of raw meat: Safe handling of
                      raw meat can be challenging, especially in busy kitchens
                      where multiple tasks are being performed at once. In
                      addition, it can be difficult to maintain proper hygiene
                      practices when working quickly or under pressure. However,
                      training and practice can help to overcome these
                      challenges and ensure that safe handling of raw meat
                      becomes second nature.
                    </li>
                    <p>
                      In conclusion, safe handling of raw meat is essential for
                      preventing the spread of harmful bacteria and ensuring
                      that the meat is safe to consume. By following proper
                      hygiene and handling practices, kitchen staff can work
                      more efficiently and effectively, leading to improved
                      productivity and potentially higher customer satisfaction.
                      While there are challenges associated with safe handling
                      of raw meat, training and practice can help to ensure that
                      kitchen staff are following safe handling practices and
                      creating a safer working environment.
                    </p>
                  </ol>
                  <li>
                    <button
                      className="QuizButton"
                      onClick={() => (handleClickfinal(), handleQuizSubmit(5))}
                    >
                      Unit 5 Quiz button
                    </button>
                  </li>
                  <li>
                    <button
                      className="DownloadCertificate button "
                      onClick={() => handleUnitCertificate(1)}
                    >
                      Download Certificate
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};
export default CourseModule2;
