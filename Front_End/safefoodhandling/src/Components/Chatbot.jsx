import { useState } from "react";
import "./css/Chatbot.css";

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");

  const questions = [
    "How can I help you today?",
    "What is your name?",
    "What is your email address?",
    "What is your phone number?",
    "Do you have any other questions?",
  ];
  const answers = [
    "I can help you with questions about our products or services.",
    "My name is Chatbot!",
    "My email address is chatbot@company.com.",
    "My phone number is (123) 456-7890.",
    "Please let me know how else I can assist you.",
  ];

  const handleShowChatbot = () => {
    setShowChatbot(true);
  };

  const handleHideChatbot = () => {
    setShowChatbot(false);
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAnswer(answers[currentQuestion]);
    setCurrentQuestion(currentQuestion + 1);
    setMessage("");
  };

  return (
    <>
      {showChatbot ? (
        <div className="chatbot-container">
          <div className="chatbot">
            <div className="chatbot-header">
              <span
                className="chatbot-icon"
                role="img"
                aria-label="Chatbot Icon"
              >
                💬
              </span>
              <span className="chatbot-title">Chatbot</span>
              <button className="chatbot-close" onClick={handleHideChatbot}>
                &times;
              </button>
            </div>
            <div className="chatbot-body">
              {currentQuestion < questions.length && (
                <>
                  <div className="chatbot-message">
                    <p className="chatbot-question">
                      {questions[currentQuestion]}
                    </p>
                    <p className="chatbot-answer">{answer}</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      value={message}
                      onChange={handleInputChange}
                      className="chatbot-input"
                      placeholder="Type your message here"
                    />
                    <button type="submit" className="chatbot-submit">
                      Send
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="chatbot-bubble" onClick={handleShowChatbot}>
          <span className="chatbot-icon" role="img" aria-label="Chatbot Icon">
            💬
          </span>
        </div>
      )}
    </>
  );
};

export default Chatbot;
