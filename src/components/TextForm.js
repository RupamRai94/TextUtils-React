import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = ()=>{
        // console.log("handleUpClick Fired");
        let newText = text.toUpperCase();
        setText(newText)
    }
    
    const handleOnChange = (event)=>{
        // console.log("handleOnChange Fired");
        setText(event.target.value)
    }
    
    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    
    const handleSwapCaseClick = ()=>{
        let newText = "";
        for(let i = 0; i < text.length; i++){
            if(text[i] == text[i].toLowerCase()){
                newText += text[i].toUpperCase();
                console.log(newText)
            }else{
                newText += text[i].toLowerCase();
            }
        }
        setText(newText)
    }

    const handleClearClick = ()=>{
        setText("")
    }

  return (
    <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Example textarea</label>
                {/* handleOnChange is using for change the state if someone tying on TB so it should change b/c of value={text} */}
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleSwapCaseClick}>SwapCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}