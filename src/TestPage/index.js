import useTestQuestionList from "./useTestQuestionList";
import { useState } from "react";
import "./styles.css";
import CountDownTimer from "./CountDownTimer";
import { useNavigate } from "react-router-dom";
import TestQuestion from "./TestQuestion";

const TestPage = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [selectedOption, setSelectedOption] = useState();
  const Router = useNavigate();
  const {
    testQuestions = [],
    setTestQuestions = () => {},
    loading,
  } = useTestQuestionList();

  const handleSubmit = () => {
    setQuestionNumber((pev) => pev + 1);

    if (testQuestions.length) {
      const updatedQuestions = [...testQuestions];
      updatedQuestions[questionNumber - 1].answered = selectedOption || "";
      setTestQuestions([...updatedQuestions]);
    }
  };

  const handleQuizSubmit = () => {
    const arrayOfObjectsString = JSON.stringify(testQuestions);
    Router(`/result?data=${encodeURIComponent(arrayOfObjectsString)}`);
  };

  return (
    <div className="test_page_container">
      {loading ? null : (
        <>
          <div className="box">
            <TestQuestion
              testQuestions={testQuestions}
              questionNumber={questionNumber}
              setTestQuestions={setTestQuestions}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <div className="footer">
              {questionNumber < 15 ? (
                <>
                  <button onClick={() => setQuestionNumber((pev) => pev + 1)}>
                    Skip to Next
                  </button>
                  <button onClick={() => handleSubmit()}>Submit</button>
                </>
              ) : (
                <button onClick={() => handleQuizSubmit()}>Submit Quiz</button>
              )}
            </div>
          </div>
          <div className="right_box">
            <CountDownTimer handleQuizSubmit={handleQuizSubmit} />
            {[...Array(15).keys()].map((item, index) => {
              return (
                <div
                  className="status"
                  onClick={() => setQuestionNumber(item + 1)}
                >
                  <span className="width_overview">{item + 1}</span>
                  <span className="width_overview">
                    {testQuestions[index]?.visited ? <div>Visited</div> : null}
                  </span>
                  <span className="width_overview">
                    {testQuestions[index]?.answered ? (
                      <div>Answered</div>
                    ) : null}
                  </span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
export default TestPage;
