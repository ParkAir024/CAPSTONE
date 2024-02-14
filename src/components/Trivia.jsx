import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import he from "he";
import Spinner from 'react-bootstrap/Spinner';

export default function Trivia() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrivia() {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple"
        );
        const data = await response.json();
        setQuestions(data.results.map(question => ({
          ...question,
          question: he.decode(question.question),
          incorrect_answers: question.incorrect_answers.map(answer => he.decode(answer)),
          correct_answer: he.decode(question.correct_answer)
        })));
      } catch (error) {
        console.error("Error fetching trivia:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTrivia();
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowResult(true);
    if (option === questions[currentQuestionIndex].correct_answer) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setSelectedOption(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("End of trivia");
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setCorrectAnswersCount(0);
  };

  const currentQuestion = questions[currentQuestionIndex];

  const options = currentQuestion ? [...currentQuestion.incorrect_answers, currentQuestion.correct_answer] : [];

  // Shuffle options if currentQuestion is defined
  if (currentQuestion) {
    options.sort(() => Math.random() - 0.5);
  }

  return (
    <Container className="game-container text">
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <>
          {currentQuestionIndex < questions.length && (
            <div>
              <h1>Trivia Question</h1>
              <p>
                <strong>Question:</strong> {currentQuestion.question}
              </p>
              <div>
                {options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline-primary"
                    onClick={() => handleOptionSelect(option)}
                    style={{ margin: "5px" }}
                    disabled={showResult}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          )}
          {showResult && (
            <div>
              {selectedOption === currentQuestion.correct_answer ? (
                <p>Correct!</p>
              ) : (
                <p>Incorrect!</p>
              )}
              {currentQuestionIndex < questions.length - 1 ? (
                <Button onClick={handleNextQuestion}>Next Question</Button>
              ) : (
                <div>
                  <h1>Quiz Completed!</h1>
                  <p>Total correct answers: {correctAnswersCount}</p>
                  <Button onClick={handleRetry}>Retry</Button>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </Container>
  );
}
