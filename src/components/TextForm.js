import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = ()=>{
        // console.log("handleUpClick Fired");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }
    
    const handleOnChange = (event)=>{
        // console.log("handleOnChange Fired");
        setText(event.target.value)
    }
    
    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
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
        props.showAlert("Text has been swapped!", "success")
    }

    const handleClearClick = ()=>{
        setText("")
        props.showAlert("Cleared textbox!", "success")
    }

    const handleCopyText = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied!", "success")
    }
    
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed!", "success")
    }

  return (
    <>
        <div className="container" style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* handleOnChange is using for change the state if someone tying on TB so it should change b/c of value={text} */}
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white', 
                color : props.mode === 'dark' ? 'white' : '#042743'}} rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleSwapCaseClick}>SwapCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something in the above text area to preview it here"}</p>
        </div>
    </>
  )
}