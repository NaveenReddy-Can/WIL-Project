import React, { useState } from "react";
import Quiz2 from "./Quizzes/Quiz2";
import "./css/CourseModule1.css";
import { useNavigate } from "react-router-dom";

const CourseModule1 = () => {
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
                  Click here to enter - Unit 2: Food Rotation
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
            Unit 2: Food Rotation
          </button>
          {activeUnit === 2 && isUnitOpen(2) && (
            <div className="expandable-div">
              <div className="scroll">
                <h2 onClick={() => toggleExpand(0)}>
                  <center>Food Rotation</center>
                </h2>
                <div
                  className={`expandable-content ${
                    isExpanded[0] ? "expanded" : "collapsed"
                  }`}
                >
                  <ul>
                    <div className="container">
                      <iframe
                        title="frame1"
                        className="responsive-iframe"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                      ></iframe>
                    </div>

                    <ol>
                      <p>
                        Food rotation is an important aspect of food safety that
                        involves managing inventory to ensure that food products
                        are used before they expire. It is crucial for
                        maintaining the quality of food products and reducing
                        the risk of foodborne illness. Here are some key points
                        and paragraphs about food rotation:
                      </p>
                      <li>
                        Importance of food rotation: Food rotation is important
                        for several reasons. Firstly, it helps to prevent food
                        waste by ensuring that food products are used before
                        they expire. Secondly, it helps to maintain the quality
                        of food products, as expired or spoiled food can lead to
                        poor taste and texture, and potentially harmful
                        bacteria. Thirdly, it helps to reduce the risk of
                        foodborne illness, as expired or spoiled food can
                        contain harmful bacteria that can make people sick.
                      </li>
                      <li>
                        How to implement food rotation: Food rotation can be
                        implemented in a number of ways, depending on the type
                        of food establishment. In a restaurant, for example,
                        food rotation may involve labeling and dating food
                        products, and ensuring that older products are used
                        first. In a grocery store, food rotation may involve
                        checking expiration dates and rotating stock
                        accordingly. In a home kitchen, food rotation may
                        involve organizing the fridge and pantry to ensure that
                        older products are used first.
                      </li>
                      <li>
                        Benefits of food rotation: There are several benefits to
                        implementing a food rotation system. Firstly, it can
                        help to reduce food waste, which is not only
                        environmentally responsible but can also save money.
                        Secondly, it can help to maintain the quality of food
                        products, which can improve customer satisfaction and
                        potentially increase sales. Thirdly, it can help to
                        reduce the risk of foodborne illness, which is not only
                        important for public health but can also protect a
                        business's reputation.
                      </li>
                      <li>
                        Challenges of food rotation: While food rotation is an
                        important aspect of food safety, it can also be
                        challenging to implement. Some of the challenges include
                        managing inventory, training staff, and ensuring
                        compliance with food safety regulations. In addition,
                        food rotation can be time-consuming and may require
                        additional resources, such as labeling and dating
                        equipment.
                      </li>
                      <p>
                        In conclusion, food rotation is a crucial aspect of food
                        safety that involves managing inventory to ensure that
                        food products are used before they expire. It is
                        important for reducing food waste, maintaining quality,
                        and reducing the risk of foodborne illness. While there
                        are challenges associated with implementing a food
                        rotation system, the benefits make it a worthwhile
                        investment for any food establishment.
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
                        Click here to enter - Unit 3: Safe Knife Handling
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
            Unit 3: Safe Knife Handling
          </button>
          {activeUnit === 3 && isUnitOpen(3) && (
            <div className="expandable-div">
              <h2 onClick={() => toggleExpand(0)}>
                <center>Safe Knife Handling</center>
              </h2>
              <div
                className={`expandable-content ${
                  isExpanded[0] ? "expanded" : "collapsed"
                }`}
              >
                <ul>
                  <div className="container">
                    <iframe
                      title="frame2"
                      className="responsive-iframe"
                      src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    ></iframe>
                  </div>

                  <ol>
                    <p>
                      Safe knife handling is essential for anyone working in a
                      kitchen, whether it be a professional chef or a home cook.
                      Using knives improperly can lead to serious injury, and
                      even small cuts can result in contamination of food
                      products. Here are some key points and paragraphs about
                      safe knife handling:
                    </p>
                    <li>
                      Importance of safe knife handling: Safe knife handling is
                      crucial for preventing injuries and ensuring the safety of
                      those working in a kitchen. Injuries from knives can range
                      from small cuts to more serious injuries that can require
                      medical attention. In addition to the physical injuries,
                      improper knife handling can also lead to
                      cross-contamination of food products, potentially
                      resulting in foodborne illness.
                    </li>
                    <li>
                      Techniques for safe knife handling: There are several
                      techniques that can be used to handle knives safely.
                      Firstly, it is important to choose the right knife for the
                      task at hand. Secondly, grip the handle of the knife
                      firmly with the fingers wrapped around the handle and the
                      thumb on the other side. The blade should be angled away
                      from the body. Thirdly, keep the other hand and fingers
                      away from the blade while cutting, and always use a
                      cutting board or other stable surface.
                    </li>
                    <li>
                      Benefits of safe knife handling: Safe knife handling has
                      several benefits, including reducing the risk of injury
                      and contamination of food products. By following proper
                      knife handling techniques, kitchen staff can work more
                      efficiently and effectively, leading to improved
                      productivity and potentially higher customer satisfaction.{" "}
                    </li>
                    <li>
                      Challenges of safe knife handling: Safe knife handling can
                      be challenging, especially for those who are new to
                      working in a kitchen. In addition, it can be difficult to
                      maintain proper knife handling techniques when working
                      quickly or under pressure. However, training and practice
                      can help to overcome these challenges and ensure that safe
                      knife handling becomes second nature.
                    </li>
                    <p>
                      In conclusion, safe knife handling is essential for anyone
                      working in a kitchen. Proper knife handling techniques can
                      help to prevent injuries, reduce the risk of
                      contamination, and improve productivity. While there are
                      challenges associated with safe knife handling, training
                      and practice can help to ensure that kitchen staff are
                      using knives safely and effectively. By prioritizing safe
                      knife handling, food establishments can create a safer and
                      more efficient working environment.
                    </p>
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
                      Click here to enter - Unit 4: Raw Meat
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
            Unit 4: Raw Meat
          </button>
          {activeUnit === 4 && isUnitOpen(4) && (
            <div className="expandable-div">
              <h2 onClick={() => toggleExpand(0)}>
                <center>Raw Meat</center>
              </h2>
              <div
                className={`expandable-content ${
                  isExpanded[0] ? "expanded" : "collapsed"
                }`}
              >
                <ul>
                  <div className="container">
                    <iframe
                      title="frame3"
                      className="responsive-iframe"
                      src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    ></iframe>
                  </div>

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
                      use separate cutting boards, utensils, and containers for
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
                      use separate cutting boards, utensils, and containers for
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
export default CourseModule1;
