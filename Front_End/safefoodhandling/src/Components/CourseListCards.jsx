import React from "react";
import { Card, Button } from "react-bootstrap";
import "./css/CourseListCard.css";
const CardComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-6 mb-4">
          <Card className="custom-card">
            <Card.Img
              variant="top"
              src="https://wilproject.blob.core.windows.net/images/food_safe.jpg"
              style={{ height: "400px" }}
            />

            <Card.Body>
              <Card.Title className="custom-title">
                Safe food Handling
              </Card.Title>
              <Card.Text className="custom-text">
                Safe food handling is important to prevent illness. It involves
                proper food storage, cooking, and cleaning to avoid harmful
                bacteria. Wash hands, cook meat to recommended temperatures, and
                refrigerate leftovers promptly. Follow these steps to keep food
                safe.
              </Card.Text>
              <div className="CardBodyButtons">
                <form action="/create-checkout-session" method="POST">
                  <Button type="submit" variant="primary">
                    Buy $10
                  </Button>{" "}
                </form>
                <Button variant="secondary"> + Add to wishlist</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-6 mb-4">
          <Card className="custom-card">
            <Card.Img
              variant="top"
              src="https://wilproject.blob.core.windows.net/images/foodsafety.jpg"
              style={{ height: "400px" }}
            />

            <Card.Body>
              <Card.Title className="custom-title">Food Safety</Card.Title>
              <Card.Text className="custom-text">
                Food safety involves practices to prevent contamination and
                spoilage of food, and to reduce the risk of foodborne illness.
                By following guidelines such as proper storage, handling, and
                cooking, we can ensure that the food we eat is safe and healthy.
              </Card.Text>
              <div className="CardBodyButtons">
                <form action="/create-checkout-session" method="POST">
                  <Button type="submit" variant="primary">
                    Buy $10
                  </Button>{" "}
                </form>
                <Button variant="secondary"> + Add to wishlist</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-6 mb-4">
          <Card className="custom-card">
            <Card.Img
              variant="top"
              src="https://wilproject.blob.core.windows.net/images/foodcutting.jpeg"
              style={{ height: "400px" }}
            />

            <Card.Body>
              <Card.Title className="custom-title">
                Food Cutting and Safety Tips
              </Card.Title>
              <Card.Text className="custom-text">
                When cutting food, use a clean cutting board and sharp knife to
                reduce the risk of injury. Always cut away from your body and
                keep fingers tucked under. Remember to wash your hands and
                utensils before and after handling food.
              </Card.Text>
              <div className="CardBodyButtons">
                <form action="/create-checkout-session" method="POST">
                  <Button type="submit" variant="primary">
                    Buy $10
                  </Button>{" "}
                </form>
                <Button variant="secondary"> + Add to wishlist</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-6 mb-4">
          <Card className="custom-card">
            <Card.Img
              variant="top"
              src="https://wilproject.blob.core.windows.net/images/foodstorage1.jpg"
              style={{ height: "400px" }}
            />

            <Card.Body>
              <Card.Title className="custom-title">Food Stoarge</Card.Title>
              <Card.Text className="custom-text">
                When storing food, keep raw meats separate from ready-to-eat
                foods to prevent cross-contamination. Use airtight containers or
                wrap foods tightly in plastic wrap or foil to prevent spoilage.
                Always check expiration dates and discard any expired or spoiled
                food.
              </Card.Text>
              <div className="CardBodyButtons">
                <form action="/create-checkout-session" method="POST">
                  <Button type="submit" variant="primary">
                    Buy $10
                  </Button>{" "}
                </form>
                <Button variant="secondary"> + Add to wishlist</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
