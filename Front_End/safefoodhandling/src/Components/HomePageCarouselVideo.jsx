import { height } from "@mui/system";
import React from "react";
import { Carousel } from "react-bootstrap";

const videos = [
  {
    src: "https://wilproject.blob.core.windows.net/videos/Module 6 — Effective Communication and Conduct in the Workplace.mp4",
    caption: "Caption 1",
  },
  {
    src: "https://wilproject.blob.core.windows.net/videos/Module 4 — Employee Illness and Injury.mp4",
    caption: "Caption 2",
  },
  {
    src: "https://wilproject.blob.core.windows.net/videos/Module 7 — Thermometer Calibration and Verification.mp4",
    caption: "Caption 3",
  },
];

const BootstrapCarouselVideos = () => {
  return (
    <Carousel>
      {videos.map((image, index) => (
        <Carousel.Item key={index}>
          <video
            className="d-block w-100"
            style={{ height: "500px", width: "1500px" }}
            controls
          >
            <source src={image.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <Carousel.Caption>
            <h3>{image.caption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BootstrapCarouselVideos;
