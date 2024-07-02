import React from "react";

export default function Textbox(props) {
  return (
    <div>
        <div>
        <h1>{props.heading}</h1>
        </div>
      <div className="mb-3">
        {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label> */}
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>

        <button className="btn btn-primmary my-3">Convert to upperCase</button>
      </div>
    </div>
  );
}
