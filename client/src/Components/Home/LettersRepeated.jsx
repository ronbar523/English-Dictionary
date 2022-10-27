import React, { useState } from "react";
import LettersRepeatedModal from "../Modals/LettersRepeatedModel";

const LettersRepeated = ({ dictionary, opacity, setOpacity }) => {

  const [modalSolution, setModalSolution] = useState(false);

  const arrayForResult = [];

  // Function To Push The Values After Filtered To "arrayForResult" Array
  dictionary.forEach((item) => {
    let splitLetter = item.split("");
    for (let x = 0; x < splitLetter.length; x++) {
      if (splitLetter[x] === splitLetter[x + 1]) {
        return arrayForResult.push(item);
      }
    }
  });

  return (
    <>
      <div className={opacity ? "d-inline openModel " : "d-inline"}>
        <h4 className="from-label mt-4 ms-3">
          Check how many words that the letters repeat her self in a row:
        </h4>

        <button
          type="button"
          className="btn btn-primary btn-sm ms-3 mt-1 button-page"
          onClick={() => {
            setModalSolution(true);
            setOpacity(true);
          }}
        >
          Check
        </button>
      </div>
      <div>
        {/* Shows Solution Mission Number 4*/}
        {modalSolution ? (
          <LettersRepeatedModal
            dictionary={dictionary}
            arrayForResult={arrayForResult}
            setModalSolution={setModalSolution}
            setOpacity={setOpacity}
          />
        ) : null}
      </div>
    </>
  );
};

export default LettersRepeated;
