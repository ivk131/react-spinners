import React from "react";
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";
import { css } from "@emotion/core";
import "./App.css";

const loderCss = css`
  margin-top: 25px;
  margin-buttom: 25px;
`;
function App() {
  return (
    <div className='App'>
      <h1>React-spinners!</h1>
      <BounceLoader css={loderCss} size={40} color='blue' loading />
      <BarLoader css={loderCss} size={72} color='red' loading />
      <BeatLoader css={loderCss} size={48} color='purple' loading />
    </div>
  );
}

export default App;
