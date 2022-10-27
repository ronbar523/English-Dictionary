import React, { useState } from "react";
import EndWithLetterModal from "../Modals/EndWithLetterModal";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EndWithLetter = ({ dictionary, opacity, setOpacity, P }) => {

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
  function findAllWordsWithEnd() {
    dictionary.forEach((item) => {
      let word = item.toString();
      if (word.endsWith(inputValue)) {
        return arrayForResult.push(word);
      }
    });
  }

  return (
    <>
      <div className={opacity ? "d-inline openModel" : "d-inline"}>
        <h4 className="from-label mt-4 ms-3">
          Check how many words end with the letter:
        </h4>
        <input
          type="text"
          maxLength="1"
          className="from-control col-sm-6 col-md-5 col-lg-2 mb-2 ms-3"
          value={inputValueBigLetter}
          onClick={findAllWordsWithEnd()}
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

      {/* Shows Solution Mission Number 3 */}
      <div>
        {modalSolution ? (
          <EndWithLetterModal
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

export default EndWithLetter;
