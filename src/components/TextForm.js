import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","Success");
  };
  const handleLoClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","Success");
  };
  const handleClearClick = () => {
    console.log("Uppercase was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared","Success");
  };
  const titleCase = () => {
    let string = text;
    var sentence = string.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    setText(sentence.join(" "));
    props.showAlert("Converted to Titlecase!","Success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking Now","Success");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={titleCase}>
          Convert to TitleCase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>Minutes to read: {0.008 * text.split(" ").length}</p>
        <p>Sentences: {text.split(". ").length - 1}</p>
        <p>{text.length>0?text:"Enter something to preview!"}</p>
      </div>
    </>
  );
}
