import React, { useState, useEffect } from "react";
import { wordStore } from "../Components/Store/WordStore";
import styled from "@emotion/styled";
import axios from "axios";

import FindWord from "../Components/Home/FindWord";
import StartsWithLetter from "../Components/Home/StartsWithLetter";
import LetterIncluding from "../Components/Home/LetterIncluding";
import EndWithLetter from "../Components/Home/EndWithLetter";
import LettersRepeated from "../Components/Home/LettersRepeated";


const Home = () => {
  // New Empty Array To Push All Words
  const [dictionary, setDictionary] = useState([]);

  // Req To Get All The Words
  useEffect(() => {
    axios
      .get("https://random-word-api.herokuapp.com/all")
      .then((res) => setDictionary(res.data));
  }, []);

  const [opacity, setOpacity] = useState(false);


  const P = styled.p`
    margin-left: 17px;
    margin-top: 5px;
    font-size: 20px;
  `;

  return (
    <div className="page photo">
      <h1
        className={
          opacity ? "text-center openModel mt-5 mb-5" : "text-center mt-5 mb-5"
        }
      >
        {" "}
        English Dictionary{" "}
      </h1>

      <FindWord
        dictionary={dictionary}
        opacity={opacity}
        setOpacity={setOpacity}
        P={P}
        store={wordStore}
      />

      <StartsWithLetter
        dictionary={dictionary}
        opacity={opacity}
        setOpacity={setOpacity}
        P={P}
      />

      <LetterIncluding
        dictionary={dictionary}
        opacity={opacity}
        setOpacity={setOpacity}
        P={P}
      />

      <EndWithLetter
        dictionary={dictionary}
        opacity={opacity}
        setOpacity={setOpacity}
        P={P}
      />

      <LettersRepeated
        dictionary={dictionary}
        opacity={opacity}
        setOpacity={setOpacity}
      />
    </div>
  );
};

export default Home;
