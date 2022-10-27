import React, { useState } from "react";
import LetterIncludingModal from "../Modals/LetterIncludingModal";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LetterIncluding = ({ dictionary, opacity, setOpacity, P }) => {
  

  const [inputValue, setInputValue] = useState("");
  const inputValueBigLetter = inputValue.toUpperCase();
  const [inputFocus, setInputFocus] = useState(false);

  const [modalSolution2, setModalSolution] = useState(false);

  // Catch Event (letter) From The Input And Put It In The "inputValue" Variable
  const searchLetters = (event) => {
    setInputValue(event.target.value);
  };

  // clean Input
  const resetInputField = () => {
    setInputValue("");
  };

  // Empty OBJ To Push The Result Of "countLetter" Function
  const count = {};

  // Function To Push The Result To The "count" OBJ
  function countLetter() {
    // Copies All The Values From "dictionary" Array And Convert To String
    const str = dictionary.toString();

    // Split All Letters From The String "str" ​​And Put Into A New Array "allLetters"
    const allLetters = Array.from(str);

    // Check How Many Times Every letter shown And Push The Result To The "count" OBJ
    allLetters.forEach((item) => {
      if (count[item]) {
        count[item]++;
      } else {
        count[item] = 1;
      }
      return count;
    });
  }

  return (
    <>
      <div className={opacity ? "d-inline openModel mt-2" : "d-inline "}>
        <h4 className="from-label mt-4 ms-3">
          Check how many times the letter show's in the dictionary:
        </h4>
        <input
          type="text"
          maxLength="1"
          className="from-control col-sm-6 col-md-5 col-lg-2 mb-2 ms-3 mt-1"
          value={inputValue}
          onClick={countLetter()}
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          onChange={(e) => {
            const re = /^[A-Za-z]+$/;
            if (e.target.value === "" || re.test(e.target.value)) {
              searchLetters(e);
            }
          }}
        />
      </div>

      <button
        type="button"
        className={
          opacity
            ? "btn btn-primary btn-sm ms-3 button-page openModel"
            : "btn btn-primary btn-sm ms-3 button-page"
        }
        disabled={inputValue.length === 0}
        onClick={() => {
          setModalSolution(true);
          setOpacity(true);
        }}
      >
        Check
      </button>
      {inputFocus ? (
        <P>
          <FontAwesomeIcon icon={faInfoCircle} />
          Must To Including Only 1 Character
        </P>
      ) : null}
      <div>
        {/* Shows Solution Mission Number 2 */}
        {modalSolution2 ? (
          <LetterIncludingModal
            count={count}
            inputValue={inputValue}
            inputValueBigLetter={inputValueBigLetter}
            setModalSolution={setModalSolution}
            resetInputField={resetInputField}
            setOpacity={setOpacity}
          />
        ) : null}
      </div>
    </>
  );
};
 
export default LetterIncluding;