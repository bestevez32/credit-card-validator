import React, { useState } from "react";
import axios from "axios";
import "./App.css";

// Valid CC Numbers: 4532015112830366, 4417123456789113

const App = () => {
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isInputEmpty, setInputEmpty] = useState<boolean | null>(null);

  const handleCreditCardChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const regex = /^[0-9\b]+$/;
    const regexValidator = regex.test(event.target.value);
    if (event.target.value === "" || regexValidator) {
      setCreditCardNumber(event.target.value);
    }
  };

  const removeWarnings = () => {
    setInputEmpty(false);
    setIsValid(null);
  };

  const handleValidate = async () => {
    if (!creditCardNumber) {
      setInputEmpty(true);
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/validate-credit-card",
          {
            creditCardNumber,
          }
        );

        setIsValid(response.data.isValid);
      } catch (error) {
        console.error("Error validating credit card:", error);
      }
    }
  };

  return (
    <div className="container">
      <h1>Credit Card Validation</h1>
      <div className="inputContainer">
        <label htmlFor="creditCardNumber">Enter Credit Card Number:</label>
        <input
          type="text"
          id="creditCardNumber"
          value={creditCardNumber}
          onChange={handleCreditCardChange}
          onFocus={removeWarnings}
          className="ccInput"
        />
      </div>
      <button className="button" onClick={handleValidate}>
        Validate
      </button>
      {isValid !== null && (
        <div style={{ marginTop: "10px" }}>
          {isValid ? (
            <span className="ccValid">Valid credit card number</span>
          ) : (
            <span className="ccNotValid">Invalid credit card number</span>
          )}
        </div>
      )}
      {isInputEmpty && (
        <div className="emptyInput">Please Enter a Credit Card Number</div>
      )}
    </div>
  );
};

export default App;
