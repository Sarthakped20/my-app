import React , {useState} from "react";

export default function Textbox(props) {
  const handleUpClick = ()=>{
    console.log("clicked "+text);
    const newText = text.toUpperCase();
    SetText(newText);

  }
  const handleOnChange = (event)=>{
    console.log("Change");
    SetText(event.target.value)

  }
  const handleLoClick = (event)=>{
    console.log("LoClicked "+text);
    const newText = text.toLowerCase();
    SetText(newText);

  }

  const [text,SetText]= useState("");
  // SetText = "sarthak"
  // console.log(useState("Enter text here"))
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
          value={text}
          onChange={handleOnChange}
        ></textarea>

        <button className="btn btn-primmary my-3" onClick={handleUpClick} >Convert to upperCase</button>
        <button className="btn btn-primary2 my3"onClick={handleLoClick}>Convert to lowerCase</button>
      </div>
    </div>
  );
}
