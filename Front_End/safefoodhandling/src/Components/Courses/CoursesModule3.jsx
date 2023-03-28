import React, { useState } from "react";
import "../css/CourseModule1.css";
import { useNavigate } from "react-router-dom";

const CourseModule4 = () => {
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
        <center>
          {" "}
          <h1 class="alert alert-info" role="alert">
            Food Safety and Quality Control in the Food Industry
          </h1>
        </center>
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
                  Click here to enter - Unit 2: Thermometer calibration
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
            Unit 2: Thermometer calibration
          </button>
          {activeUnit === 2 && isUnitOpen(2) && (
            <div className="expandable-div">
              <div className="scroll">
                <h2 onClick={() => toggleExpand(0)}>
                  <center>Thermometer calibration</center>
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
                        Thermometer calibration in the kitchen is a process of
                        verifying and adjusting the accuracy of a thermometer
                        used in food preparation and cooking. Accurate
                        temperature measurement is critical to ensure food
                        safety, prevent foodborne illnesses, and produce
                        high-quality dishes. Here are five key points to
                        elaborate on thermometer calibration in the kitchen:
                      </p>
                      <li>
                        Calibration Frequency: Thermometers used in the kitchen
                        should be calibrated frequently to ensure accuracy. The
                        frequency of calibration depends on how often the
                        thermometer is used, the type of food being measured,
                        and the manufacturer's recommendation. It is recommended
                        to calibrate the thermometer at least once a month.
                      </li>
                      <li>
                        Calibration Method: There are different methods of
                        calibrating a kitchen thermometer, such as the ice bath
                        method and boiling point method. In the ice bath method,
                        the thermometer is placed in a mixture of ice and water
                        and adjusted to read 32°F (0°C). In the boiling point
                        method, the thermometer is placed in boiling water and
                        adjusted to read 212°F (100°C) at sea level.
                      </li>
                      <li>
                        Calibration Record: It is important to keep a record of
                        the calibration date, method, and results to track the
                        thermometer's accuracy over time. This record also helps
                        in identifying any calibration issues or deviations and
                        taking corrective action.
                      </li>
                      <li>
                        Quality Assurance: In commercial kitchens, thermometer
                        calibration is a critical part of the quality assurance
                        program to ensure compliance with food safety
                        regulations and prevent foodborne illnesses. Regular
                        calibration helps to identify any issues and take
                        corrective action before they become a problem.
                      </li>
                      <p>
                        In conclusion, Replacement of Thermometer: If a kitchen
                        thermometer is found to be out of calibration and cannot
                        be adjusted, it should be replaced with a new one. Using
                        an inaccurate thermometer can lead to undercooking or
                        overcooking of food, which can cause foodborne illnesses
                        or affect the quality of the dish.
                      </p>
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
                        Click here to enter - Unit 3:Process Of Receiving Food
                        Products
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
            Unit 3: Process Of Receiving Food Products
          </button>
          {activeUnit === 3 && isUnitOpen(3) && (
            <div className="expandable-div">
              <h2 onClick={() => toggleExpand(0)}>
                <center>Process Of Receiving Food Products</center>
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
                      Inspection: When receiving food products, it is important
                      to inspect them thoroughly for quality, safety, and
                      accuracy. Check the product for any signs of damage or
                      spoilage, such as discoloration, odors, or signs of pests.
                      Verify that the product matches the quantity and
                      specifications on the order, including the product name,
                      brand, weight, and expiration date. :
                    </p>
                    <li>
                      Temperature Control: Proper temperature control is
                      critical for ensuring the safety and quality of food
                      products. Check the temperature of refrigerated and frozen
                      products upon arrival to make sure they are at the correct
                      temperature. Keep refrigerated and frozen products
                      separated from each other and from other products to
                      prevent cross-contamination.
                    </li>
                    <li>
                      Storage: After receiving food products, store them in the
                      appropriate area of the kitchen based on their temperature
                      requirements and the risk of contamination. Perishable
                      products should be stored at 40°F or below, while frozen
                      products should be stored at 0°F or below. Dry goods
                      should be stored in a cool, dry place away from sources of
                      moisture and heat.
                    </li>
                    <li>
                      Documentation: Keep accurate records of all food products
                      received, including the date, quantity, and quality of the
                      product. This information is important for tracking
                      inventory, identifying potential issues with suppliers,
                      and ensuring compliance with regulations.{" "}
                    </li>
                    <li>
                      Communication: Effective communication with suppliers is
                      key to ensuring that food products are received on time
                      and in good condition. Develop a system for communicating
                      with suppliers about expected delivery times, order
                      changes, and product issues. Provide feedback to suppliers
                      about the quality of their products to help improve future
                      orders.
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
                      Click here to enter - Unit 4: Food Product Storage
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
            Unit 4: Food Product Storage
          </button>
          {activeUnit === 4 && isUnitOpen(4) && (
            <div className="expandable-div">
              <h2 onClick={() => toggleExpand(0)}>
                <center>Food Product Storage</center>
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
                      Food product storage refers to the process of safely
                      preserving food products for a certain period. Proper
                      storage ensures that the food remains safe to consume and
                      prevents the growth of harmful microorganisms that can
                      cause foodborne illnesses. Here are five key points to
                      consider when storing food products:
                    </p>
                    <li>
                      Temperature: The temperature at which food products are
                      stored is crucial to maintaining their quality and safety.
                      Different types of food require different storage
                      temperatures. For example, perishable items like raw meat,
                      poultry, and seafood should be kept at a temperature below
                      40°F to prevent bacterial growth. On the other hand, dry
                      goods like flour, pasta, and cereal should be stored at
                      room temperature.
                    </li>
                    <li>
                      Packaging: The type of packaging used to store food
                      products can also impact their shelf life. Proper
                      packaging can help prevent moisture, air, and light from
                      entering the product and causing spoilage. For example,
                      vacuum-sealed packaging can help keep meat fresh for
                      longer periods of time, while airtight containers are
                      ideal for storing dry goods.
                    </li>
                    <li>
                      Rotation: Food products should be stored in a way that
                      allows for easy access and rotation. This ensures that
                      older products are used first, reducing the risk of
                      spoilage and waste. This is especially important for
                      perishable items that have a short shelf life.
                    </li>
                    <li>
                      Location: The location of where food products are stored
                      can also impact their safety and quality. Food should be
                      stored in a clean, dry, and well-ventilated area. It is
                      important to keep food away from direct sunlight and other
                      sources of heat, which can cause spoilage.
                    </li>
                    <li>
                      In conclusion, Organization: Proper organization of food
                      products can help minimize waste and prevent
                      cross-contamination. Similar items should be stored
                      together, and raw meat, poultry, and seafood should always
                      be stored separately from ready-to-eat foods. Labels
                      should be used to identify the contents and the date of
                      storage, making it easier to track and use products before
                      they expire.
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
export default CourseModule4;
