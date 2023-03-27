import React from "react";
import { Carousel } from "react-bootstrap";
import { FaHeart, FaRegHeart, FaThumbsDown } from "react-icons/fa";

const images = [
  { src: "image1.jpg", caption: "Caption 1" },
  { src: "image2.jpg", caption: "Caption 2" },
  { src: "image3.jpg", caption: "Caption 3" },
  { src: "image4.jpg", caption: "Caption 4" },
  { src: "image5.jpg", caption: "Caption 5" },
  { src: "image6.jpg", caption: "Caption 6" },
  { src: "image7.jpg", caption: "Caption 7" },
  { src: "image8.jpg", caption: "Caption 8" },
  { src: "image9.jpg", caption: "Caption 9" },
  { src: "image10.jpg", caption: "Caption 10" },
];

const BootstrapCarousel3 = () => {
  const [liked, setLiked] = React.useState(false);
  const [disliked, setDisliked] = React.useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
    setDisliked(false);
  };

  const handleDislikeClick = () => {
    setDisliked(!disliked);
    setLiked(false);
  };

  return (
    <>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={`Slide ${index}`}
            />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div
        className="text-center my-5 py-5"
        style={{ backgroundColor: "white" }}
      >
        <p className="lead">
          {liked
            ? "Thank you for liking this carousel!"
            : "Do you like this carousel?"}
        </p>
        <button className="btn btn-link p-0" onClick={handleLikeClick}>
          {liked ? (
            <FaHeart
              size={48}
              color="#F06292
            "
            />
          ) : (
            <FaRegHeart size={36} />
          )}
        </button>
        <button className="btn btn-link p-0 ml-3" onClick={handleDislikeClick}>
          {disliked ? (
            <FaThumbsDown
              size={46}
              color="#FFAB91"
              style={{ animation: "shake 1s" }}
            />
          ) : (
            <FaThumbsDown size={36} />
          )}
        </button>
      </div>
    </>
  );
};

export default BootstrapCarousel3;
