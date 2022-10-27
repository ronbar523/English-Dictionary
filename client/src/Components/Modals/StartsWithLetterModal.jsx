import React from "react";


const StartsWithLetter = ({
  inputValueBigLetter,
  arrayForResult,
  setModalSolution,
  resetInputField,
  setOpacity,
}) => {
  const modalStyle = {
    display: "block",
  };

  return (
    <>
      <div
        className="modal show fade all-model border"
        style={modalStyle}
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content location">
            <div className="modal-header">
              <h4 className="modal-title ms-2"> Answear </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setModalSolution(false);
                  setOpacity(false);
                  resetInputField();
                }}
              ></button>
            </div>
            <div className="modal-body">
              <h5 className="text-center mt-3 p-3">
                In the English dictionary has{" "}
                <b>
                  {" "}
                  <u>{arrayForResult.length}</u>
                </b>{" "}
                words that start with the letter
                <b> "{inputValueBigLetter}".</b>
              </h5>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {
                  setModalSolution(false);
                  setOpacity(false);
                  resetInputField();
                }}
              >
                <span className="fs-6">Close</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartsWithLetter;
