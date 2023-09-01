import React, { useState, useEffect } from "react";

function CountdownTimer({ handleQuizSubmit = () => {} }) {
  const [minutes, setMinutes] = useState(30);

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer;

    timer = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);

        handleQuizSubmit();
      } else {
        let newMinutes = minutes;
        let newSeconds = seconds;

        if (seconds === 0) {
          newMinutes -= 1;
          newSeconds = 59;
        } else {
          newSeconds -= 1;
        }
        setMinutes(newMinutes);
        setSeconds(newSeconds);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [minutes, seconds]);

  return (
    <div>
      <div>
        <span>
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
          {minutes > 0 ? " Minutes " : " Seconds "}
          Remaining
        </span>
      </div>
    </div>
  );
}

export default CountdownTimer;
