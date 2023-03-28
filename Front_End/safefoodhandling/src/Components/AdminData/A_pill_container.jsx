import { useState } from "react";
import VerticalPillNav from "./A_HomePage_VerticalNav";
import { Nav } from "react-bootstrap";

function PillsContainer(handlePillSelect) {
  const [isPillsVisible, setIsPillsVisible] = useState(true);

  const handleTogglePills = () => {
    setIsPillsVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <div className="pills-container">
      <button className="toggle-button" onClick={handleTogglePills}>
        {isPillsVisible ? "<" : ">"}
      </button>
      <div className={`pills ${isPillsVisible ? "visible" : "hidden"}`}>
        <div className="d-flex">
          <Nav
            variant="pills"
            className="flex-column mr-3"
            onSelect={handlePillSelect}
          >
            {/* ... */}
          </Nav>
          {<VerticalPillNav />}
        </div>
      </div>
    </div>
  );
}

export default PillsContainer;
