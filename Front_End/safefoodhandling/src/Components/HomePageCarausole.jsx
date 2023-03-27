import { height } from "@mui/system";
import React from "react";
import { Carousel } from "react-bootstrap";

const images = [
  {
    src: "https://wilproject.blob.core.windows.net/images/food_safe.jpg",
    caption: "Caption 1",
  },
  {
    src: "https://wilproject.blob.core.windows.net/images/Food-Safety-Education.jpg",
    caption: "Caption 2",
  },
  {
    src: "https://wilproject.blob.core.windows.net/images/foodcutting.jpeg",
    caption: "Caption 3",
  },
  {
    src: "https://wilproject.blob.core.windows.net/images/foodsafety.jpg",
    caption: "Caption 4",
  },
  {
    src: "https://wilproject.blob.core.windows.net/images/foodsafety2.png",
    caption: "Caption 5",
  },
  {
    src: "https://wilproject.blob.core.windows.net/images/foodstorage1.jpg",
    caption: "Caption 6",
  },
  {
    src: "https://wilproject.blob.core.windows.net/images/foodstorage2.jpg",
    caption: "Caption 7",
  },
  {
    src: "https://wilproject.blob.core.windows.net/images/Food-Safety-Education.jpg",
    caption: "Caption 8",
  },
];

const BootstrapCarousel = () => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image.src}
            style={{ height: "700px", width: "1500px" }}
            alt={`Slide ${index}`}
          />
          <Carousel.Caption>
            <h3>{image.caption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BootstrapCarousel;
