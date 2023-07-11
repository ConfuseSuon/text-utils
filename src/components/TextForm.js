import React, {useState} from 'react'

export default function TextForm({heading, mode, setMode}) {
    
    const handleUpClick =() => {
        let upText = text.toUpperCase()
        setText(upText)
    }

    const handleLowerClick = () => {
        let lowText = text.toLowerCase()
        setText(lowText)
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const handleSpeakClick = () =>{
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }

    const[text, setText] = useState(" ");
    
  return (
    <>
    <div className={`container mb-3 ${mode? "bg-black text-white" : ""} `}>
<h1 className='my-3'>{heading}</h1>
<div className="mb-3">
  <textarea className={`form-control  ${mode? "bg-black text-white" : ""} `} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mb-3" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-1 mb-3" onClick={handleLowerClick}>Convert to lowercase</button>
<button className='btn btn-primary mb-3' onClick={handleSpeakClick}>Speak</button>
</div>
<div className={`container my-3 ${mode? "bg-black text-white" : ""} `}>
    <h1>Your summary</h1>
    <p>{text.split(" ").length} words and {text.length} character</p>
    <p>{text.split(" ").length * 0.008} minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
  )
}
