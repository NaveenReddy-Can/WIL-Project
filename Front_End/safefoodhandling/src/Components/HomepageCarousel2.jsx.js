import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaHeart, FaRegHeart, FaThumbsDown } from 'react-icons/fa';

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

const BootstrapCarousel4 = () => {
    const [liked, setLiked] = React.useState({});
    const [disliked, setDisliked] = React.useState({});

    const handleLikeClick = (index) => {
        setLiked((prevLiked) => ({ ...prevLiked, [index]: !prevLiked[index] }));
        setDisliked((prevDisliked) => ({ ...prevDisliked, [index]: false }));
    };

    const handleDislikeClick = (index) => {
        setDisliked((prevDisliked) => ({ ...prevDisliked, [index]: !prevDisliked[index] }));
        setLiked((prevLiked) => ({ ...prevLiked, [index]: false }));
    };

    return (
        <>
            <Carousel style={{ color: 'black' }}>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img className="d-block w-100" style={{ height: "600px", width: "1500px" }} src={image.src} alt={`Slide ${index}`} />
                        <Carousel.Caption>
                            <h3>{image.caption}</h3>
                            <div className="d-flex justify-content-center">
                                <button style={{ color: 'black' }} className="btn btn-link p-0 mr-3" onClick={() => handleLikeClick(index)}>
                                    {liked[index] ? <FaHeart size={36} color="#F06292" /> : <FaRegHeart size={30} />}
                                </button>
                                <button className="btn btn-link p-0" onClick={() => handleDislikeClick(index)}>
                                    {disliked[index] ? (
                                        <FaThumbsDown size={36} color="#FFA726" />
                                    ) : (
                                        <FaThumbsDown size={30} color="#FFFFFF" />
                                    )}
                                </button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            {/*<div className="text-center my-5 py-5" style={{ color: 'black', backgroundColor: 'white' }}>
                <p className="lead">{Object.values(liked).filter(Boolean).length} people liked this carousel</p>
                                    </div>*/}
        </>
    );
};

export default BootstrapCarousel4;
