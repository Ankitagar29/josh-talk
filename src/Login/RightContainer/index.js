import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const RightContainer = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const Router = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const valid = EMAIL_REGEX.test(email);

    setIsValid(valid);
    if (valid) {
      Router("/other");
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="email_container">
          <label>Enter Email</label>
          <input
            className="email_input"
            type="text"
            value={email}
            onChange={handleChange}
            style={{ borderColor: isValid ? "initial" : "red" }}
            required="true"
          />
        </div>
        {!isValid && (
          <div className="error">
            <div />
            <div style={{ color: "red", fontWeight: "600" }}>
              Invalid email format.
            </div>
          </div>
        )}
        <div className="button_container">
          <div></div>

          <button className="submit_button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default RightContainer;
