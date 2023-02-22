import React from 'react';
import questions from '../data/questions';
import './QuizPage.css';

function QuizPage(props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = React.useState(-1);
  const [showResult, setShowResult] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [numAttempted, setNumAttempted] = React.useState(0);

  const handleOptionSelect = (optionIndex) => {
    setSelectedOptionIndex(optionIndex);
  };

  const handleNextClick = () => {
    if (selectedOptionIndex === -1) {
      return;
    }
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.correctOptionIndex === selectedOptionIndex) {
      setScore(score + 1);
    }
    setSelectedOptionIndex(-1);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
      props.onQuizComplete(score);
    }
  };

  const handleSkipClick = () => {
    setNumAttempted(numAttempted + 1);
    setSelectedOptionIndex(-1);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
      props.onQuizComplete(score, numAttempted);
    }
  };  

  return (
    <div className="QuizPage">
      {!showResult && (
        <div className="QuizPage__questions-container">
          <h1 className="QuizPage__question">{questions[currentQuestionIndex].text}</h1>
          <div className="QuizPage__options-container">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div
                key={index}
                className={`QuizPage__option ${
                  selectedOptionIndex === index ? 'QuizPage__option--selected' : ''
                }`}
                onClick={() => handleOptionSelect(index)}
              >
                {option}
              </div>
            ))}
          </div>
          <button className="QuizPage__skip-button" onClick={handleSkipClick}>Skip</button>

          <button className="QuizPage__next-button" onClick={handleNextClick}>Next</button>
        </div>
      )}
      {showResult && (
        <div className="QuizPage__result-container">
          <h1 className="QuizPage__result-title">Quiz Result</h1>
          <p className="QuizPage__result-score">You attempted {numAttempted} out of {questions.length} questions. Your score is: {score}</p>
        </div>
      )}
    </div>
  );
}

export default QuizPage;

