import React, { useState } from "react";

export default function Textbox(props) {
  const handleUpClick = () => {
    console.log("clicked " + text);
    const newText = text.toUpperCase();
    SetText(newText);
  };
  const handleOnChange = (event) => {
    console.log("Change");
    SetText(event.target.value);
  };
  const handleLoClick = (event) => {
    console.log("LoClicked " + text);
    const newText = text.toLowerCase();
    SetText(newText);
  };
  const handleClearText = (event) => {
    console.log("LoClicked " + text);
    const newText = "";
    SetText(newText);
  };

  const [text, SetText] = useState("");
  // SetText = "sarthak"
  // console.log(useState("Enter text here"))
  return (
    <>
      <div>
        <div>
          <h1>{props.heading}</h1>
        </div>
        <div className="mb-3">
          
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>

          <button className="btn btn-outline-primmary my-3 mx-3 " onClick={handleUpClick}>
            Convert to upperCase
          </button>
          <button className="btn btn-primary2 my-3 mx-3" onClick={handleLoClick}>
            Convert to lowerCase
          </button>
          <button className="btn btn-primary2 my-3 mx-3" onClick={handleClearText}>
            Clear Text
          </button>
          <div className="container2  my-4" >
            <h3>Summary of the paragraph</h3>
            <p>The above text contains { text.split(" ").length} words and {text.length}characters.</p>
            <p>{0.008 * text.split(" ").length *60} seconds to read the paragraph.</p>
            <h3>Preview</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
