import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = ()=>{
        // console.log("handleUpClick Fired");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        // console.log("handleOnChange Fired");
        setText(event.target.value)
    }
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label">Example textarea</label>
            {/* handleOnChange is using for change the state if someone tying on TB so it should change b/c of value={text} */}
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}