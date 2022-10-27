import React, { useState } from "react";

import FindWordModal from "../Modals/FindWordModal";

import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FindWord = ({ dictionary, opacity, setOpacity, P, store }) => {
  
  const [inputValue, setInputValue] = useState("");
  const [inputFocus, setInputFocus] = useState(false);


  const [modalSolution, setModalSolution] = useState(false);

  const [result, setResult] = useState(false);

  // Catch Event (word) From The Input And Put It In The "inputValue" Variable
  const searchNewWord = (event) => {
    setInputValue(event.target.value);
  };

  const FindIfWordExist = () => {
    store.addWord(inputValue);
    setInputValue("");
    setResult(false);
    let theWord2 = { ...store.words[0] };
    dictionary.forEach((item) => {
      if (item === theWord2.word) {
        return setResult(true);
      }
    });
    setModalSolution(true);
    setOpacity(true);
  };

  let theWord = { ...store.words[0] };

  return (
    <>
      <div className={opacity ? "d-inline openModel" : "d-inline"}>
        <h4 className="from-label mt-2 ms-3">
          Check if the word <b>" {inputValue} "</b> exist
        </h4>

        <input
          type="text"
          className="from-control col-sm-6 col-md-5 col-lg-2 mt-1 ms-3 mb-2"
          value={inputValue}
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          onChange={(e) => {
            const re = /^[A-Za-z]+$/;
            if (e.target.value === "" || re.test(e.target.value)) {
              searchNewWord(e);
            }
          }}
        />

        <button
          type="button"
          className={
            opacity
              ? "btn btn-primary btn-sm ms-3 button-page openModel"
              : "btn btn-primary btn-sm ms-3 button-page"
          }
          onClick={FindIfWordExist}
          disabled={inputValue.length === 0}
        >
          Check
        </button>

        {inputFocus ? (
          <P>
            <FontAwesomeIcon icon={faInfoCircle} />
            Must To Including Only Characters
          </P>
        ) : null}
      </div>
      <div>
        {/* Shows Solution Bonus */}
        {modalSolution ? (
          <FindWordModal
            inputValue={inputValue}
            setModalSolution={setModalSolution}
            setOpacity={setOpacity}
            theWord={theWord}
            result={result}
          />
        ) : null}
      </div>
    </>
  );
};

export default FindWord;
