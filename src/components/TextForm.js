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
            if(text[i] === text[i].toLowerCase()){
                newText += text[i].toUpperCase();
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
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges(); // used to remove selected highlight
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
            <h1 className="mb-4">{props.heading}</h1>
            <div className="mb-3">
                {/* handleOnChange is using for change the state if someone tying on TB so it should change b/c of value={text} */}
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark' ? '#13466e' : 'white', 
                color : props.mode === 'dark' ? 'white' : '#042743'}} rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSwapCaseClick}>SwapCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2>Your text summary</h2>
            {/* Used regular expression to split it by space and a new line */}
            <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
    </>
  )
}