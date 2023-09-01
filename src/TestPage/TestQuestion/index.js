import { useState, useEffect } from "react";
import "./styles.css";
const TestQuestion = ({
  questionNumber,
  testQuestions = [],
  setTestQuestions,
  selectedOption,
  setSelectedOption,
}) => {
  const [totalOptions, setTotalOptions] = useState([]);
  const {
    incorrect_answers = [],
    category,
    question,
    correct_answer,
  } = testQuestions[questionNumber - 1] || {};

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    setSelectedOption();
    if (testQuestions.length) {
      setTotalOptions([...incorrect_answers, correct_answer]);
      const updatedQuestions = [...testQuestions];
      updatedQuestions[questionNumber - 1].visited = "true" || "false";
      setTestQuestions([...updatedQuestions]);
    }
  }, [questionNumber, correct_answer, incorrect_answers]);

  return (
    <div>
      <div className="header">
        <img
          alt="Josh Talks Logo"
          data-src="https://www.joshtalks.com/wp-content/themes/josh_talks/img/josh-logo.svg"
          src="https://www.joshtalks.com/wp-content/themes/josh_talks/img/josh-logo.svg"
        />
        <div className="category">Category:{category}</div>
      </div>
      <div className="question_text">
        {questionNumber}. {question}
        {(totalOptions || []).map((option) => (
          <div key={option} className="options">
            <label>
              <input
                type="radio"
                name="radioOption"
                value={option}
                checked={
                  option === testQuestions[questionNumber - 1]?.answered ||
                  option === selectedOption
                }
                onChange={handleOptionChange}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TestQuestion;
