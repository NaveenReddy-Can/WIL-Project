import React, { useState } from "react";
import "../css/CourseModule1.css";
import { useNavigate } from "react-router-dom";

const CourseModule3 = () => {
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
                  Click here to enter - Unit 2:Employee illness and injury
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
            Unit 2: Employee illness and injury
          </button>
          {activeUnit === 2 && isUnitOpen(2) && (
            <div className="expandable-div">
              <div className="scroll">
                <h2 onClick={() => toggleExpand(0)}>
                  <center>Employee illness and injury</center>
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
                        Employee illness and injury refers to any physical or
                        mental health condition that impacts an employee's
                        ability to perform their job duties. This may include
                        conditions such as chronic pain, stress, depression,
                        traumatic injuries, or even a contagious illness. :
                      </p>
                      <li>
                        1.Understanding the Difference Between Employee Illness
                        and Injury: The main difference between employee illness
                        and injury is that employee illness is typically caused
                        by an underlying medical condition, while employee
                        injury is usually caused by a workplace hazard. Employee
                        illness is usually not caused by the employer, while
                        employee injury is often the result of employer
                        negligence.
                      </li>
                      <li>
                        2.Employee Illness: Employee illness is often caused by
                        an underlying medical condition, such as heart disease
                        or diabetes. It can also be caused by exposure to
                        hazardous materials in the workplace or through contact
                        with other employees who may have a contagious illness.
                        Employers should take steps to protect employees from
                        illness by providing adequate protective clothing and
                        equipment, as well as providing proper ventilation,
                        sanitation, and other safety measures.
                      </li>
                      <li>
                        3.Employee Injury: Employee injury is typically caused
                        by workplace hazards, such as slippery floors,
                        inadequate lighting, or improperly maintained equipment.
                        Employers are responsible for providing a safe work
                        environment and must take steps to eliminate or reduce
                        the risk of injury. This includes providing proper
                        training, adequate protective equipment, and regular
                        safety inspections.
                      </li>
                      <li>
                        4.Preventing Employee Illness and Injury: Employers can
                        take steps to prevent employee illness and injury by
                        providing a safe and healthy work environment. This
                        includes providing proper ventilation, sanitation, and
                        other safety measures. Employers should also ensure that
                        employees receive adequate training and are aware of any
                        potential hazards. Regular safety inspections and
                        maintenance of equipment are also important in
                        preventing employee illness and injury.
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
                        Click here to enter - Unit 3: Kitchen equipment and
                        facilities
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
            Unit 3: Kitchen equipment and facilities
          </button>
          {activeUnit === 3 && isUnitOpen(3) && (
            <div className="expandable-div">
              <h2 onClick={() => toggleExpand(0)}>
                <center>Kitchen equipment and facilities</center>
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
                      Kitchen equipment and facilities include items such as
                      ovens, stoves, refrigerators, dishwashers, blenders, and
                      microwaves. Other essentials include cooking utensils,
                      cookware, and storage containers. Additionally, a kitchen
                      may have a sink, countertops, and cabinets for storage.:
                    </p>
                    <li>
                      1. Cooking Range: A cooking range is a must-have in any
                      kitchen. It is a combination of oven and stove and can be
                      used for cooking and baking.
                    </li>
                    <li>
                      2. Cutting Board: An excellent quality cutting board is
                      essential for the kitchen. It helps to keep the kitchen
                      counter clean by providing a safe surface for cutting,
                      slicing, and chopping food.
                    </li>
                    <li>
                      3. Kitchen Knife: A superior quality kitchen knife is a
                      must-have in any kitchen. It is important for slicing,
                      chopping, and dicing food.
                    </li>
                    <li>
                      4. Storage Containers: Storage containers are essential
                      for keeping food fresh and organized. They help to keep
                      food items separated and can be used to store leftovers in
                      the refrigerator.
                    </li>
                    <li>
                      5. Blender: A blender is a must-have in any kitchen. It
                      can be used for making smoothies, milkshakes, soups,
                      sauces, and more.
                    </li>
                    <li>
                      6. Utensils: Utensils are essential for preparing and
                      serving food. They include tongs, spatulas, ladles,
                      spoons, whisks, and more.
                    </li>
                    <li>
                      7. Pots and Pans: Pots and pans are essential for cooking
                      and baking. They come in a variety of sizes and materials
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
                      Click here to enter - Unit 4: Effective communication and
                      conduct in the workplace
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
            Unit 4: Effective communication and conduct in the workplace
          </button>
          {activeUnit === 4 && isUnitOpen(4) && (
            <div className="expandable-div">
              <h2 onClick={() => toggleExpand(0)}>
                <center>
                  Effective communication and conduct in the workplace{" "}
                </center>
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
                      Effective communication and conduct in the workplace are
                      essential factors for creating a productive and positive
                      working environment. This includes open, honest,
                      meaningful, and purposeful communication and conducted
                      respectfully. It also refers to how employees conduct
                      themselves in the workplace, such as following rules and
                      guidelines, treating others with respect, and adhering to
                      company policies and procedures.:
                    </p>
                    <li>
                      1. Respectful and professional behavior: Respectful and
                      professional behavior is essential for effective
                      communication in the workplace. Employees should treat
                      each other with respect and courtesy, regardless of their
                      positions or backgrounds. This includes refraining from
                      personal attacks, being polite and courteous and
                      refraining from using inappropriate language.
                    </li>
                    <li>
                      2. Active listening: Active listening is a key component
                      of effective communication in the workplace. It involves
                      actively listening to what the other person is saying,
                      rather than just passively hearing it. Listening intently
                      can help to ensure that all valuable information is
                      received and understood and can help to foster better
                      relationships between colleagues.
                    </li>
                    <li>
                      3. Giving and receiving feedback: Providing constructive
                      feedback is an important part of effective communication
                      in the workplace. It allows colleagues to acknowledge
                      decent work and to offer helpful suggestions to improve
                      performance. Also, receiving feedback can help employees
                      become aware of their strengths and weaknesses and develop
                      their skills and knowledge.
                    </li>
                    <li>
                      4. Clear communication: Clear communication is essential
                      for effective communication in the workplace. This
                      involves using language that is easy to understand,
                      providing all the necessary information, and avoiding
                      jargon. Also, it is important to ensure that communication
                      is delivered promptly.
                    </li>
                    <li>
                      5. Digital communication: Digital communication is
                      becoming increasingly important in the workplace. This
                      includes using digital tools such as email, messaging
                      platforms, and video conferencing. Digital communication
                      can help ensure that essential information is quickly and
                      easily shared and help foster better working
                      relationships.
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
export default CourseModule3;
