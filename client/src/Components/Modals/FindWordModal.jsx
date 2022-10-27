import React from "react";
import {
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FindWordModal = ({ theWord, setModalSolution, setOpacity, result }) => {
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
          <div className="modal-content location ">
            <div className="modal-header">
              {result ? (
                <h4 className="modal-title ms-2 text-success">
                  {" "}
                  Answear {""}
                  <FontAwesomeIcon icon={faCheck} />
                </h4>
              ) : (
                <h4 className="modal-title ms-2 text-danger">
                  {" "}
                  Answear {""}
                  <FontAwesomeIcon icon={faTimes} />
                </h4>
              )}

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setModalSolution(false);
                  setOpacity(false);
                }}
              ></button>
            </div>
            <div className="modal-body">
              <h5 className="text-center p-3 mt-3">
                The word
                <b> " {theWord.word} " </b> not exist in english
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

export default FindWordModal;
