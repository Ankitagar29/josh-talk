import React from "react";
import "./styles.css";
const FinalPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const objectString = urlParams.get("data");
  const arrayOfObjects = JSON.parse(decodeURIComponent(objectString));

  return (
    <>
      {arrayOfObjects.map((item, index) => {
        const { answered = "", correct_answer, question = "" } = item || {};
        return (
          <div className="box_answer">
            {index + 1}. {question}
            <div className="flex_row">
              <div>Your answered:{answered}</div>
              <div>Correct answered:{correct_answer}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default FinalPage;
