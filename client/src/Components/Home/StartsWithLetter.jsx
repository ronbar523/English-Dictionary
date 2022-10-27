import React, { useState } from "react";
import StartsWithLetterModal from "../Modals/StartsWithLetterModal";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StartWithLetter = ({ dictionary, opacity, setOpacity, P }) => {
  const [inputValue, setInputValue] = useState("");
  const inputValueBigLetter = inputValue.toUpperCase();
  const [inputFocus, setInputFocus] = useState(false);

  const [modalSolution, setModalSolution] = useState(false);

  // Catch Event (letter) From The Input And Put It In The "inputValue" Variable
  const searchWords = (event) => {
    setInputValue(event.target.value);
  };

  // clean Input
  const resetInputField = () => {
    setInputValue("");
  };

  const arrayForResult = [];

  // Function To Push The Values, After Filtered, To "arrayForResult" Array
  const findAllWordsWithStart = () => {
    dictionary.forEach((item) => {
      let word = item.toString();
      if (word.startsWith(inputValue)) {
        return arrayForResult.push(word);
      }
    });
  };

  return (
    <>
      <div className={opacity ? "d-inline openModel" : "d-inline"}>
        <h4 className="from-label mt-4 ms-3">
          Check how many words start with the letter:
        </h4>
        <input
          type="text"
          maxLength="1"
          className="from-control col-sm-6 col-md-5 col-lg-2 mt-1 ms-3"
          value={inputValueBigLetter}
          onClick={findAllWordsWithStart()}
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          onChange={(e) => {
            const re = /^[A-Za-z]+$/;
            if (e.target.value === "" || re.test(e.target.value)) {
              searchWords(e);
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
        onClick={() => {
          setModalSolution(true);
          setOpacity(true);
        }}
        disabled={inputValue.length === 0}
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
        {/* Shows Solution Mission Number 1 */}
        {modalSolution ? (
          <StartsWithLetterModal
            inputValueBigLetter={inputValueBigLetter}
            arrayForResult={arrayForResult}
            setModalSolution={setModalSolution}
            resetInputField={resetInputField}
            setOpacity={setOpacity}
          />
        ) : null}
      </div>
    </>
  );
};

export default StartWithLetter;
