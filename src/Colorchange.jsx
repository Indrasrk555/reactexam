import React, { useState } from "react";

export default function Colorchange() {
  const color = "#f5655b";
  const [change, setChange] = useState(color);
  const [text, setText] = useState("");

  const changeColor = () => {
    const color1 = "#23773E";
    setChange(color1);
    setText("Button Clicked");
  };
  return (
    <>
      <div className="row change">
        <div className="col-lg-6 col-md-6 col-sm-6 ">
          <div className="Leftside card" style={{ backgroundColor: change }}>
            <h4 className="hello">Hello</h4>
            <h4 className="hello">Hello Hello</h4>
            <h4 className="hello">Hello Hello Hello</h4>
            <h4 className="hello">Hello Hello Hello Hello</h4>
          </div>
        </div>
      </div>
      <div id="button">
        <button onClick={changeColor} id="button1">
          Press
        </button>
      </div>
      <div className="text1">
        <p>
          <b>{text}</b>
        </p>
      </div>
    </>
  );
}
