import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpCLick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLoCLick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleClCLick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared", "success");
    }
    const handleCaCLick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let arr = text.split(" ");
        for (var i=0; i<arr.length; i++){
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        let newText = arr.join(" ");
        setText(newText)
        props.showAlert("Text Capitalized!", "success");
    }
    const handleCoCLick = ()=>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>  
            <h1>{props.heading}</h1>
            <div>Simply enter your text and choose the case you want to convert it to.</div>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Enter Text Here.." value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#343a40':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpCLick}>UPPERCASE &gt;</button>
            <button className="btn btn-primary mx-3" onClick={handleLoCLick}>lowercase &gt;</button>
            <button className="btn btn-primary mx-1" onClick={handleClCLick}>Reset &gt;</button>
            <button className="btn btn-primary mx-3" onClick={handleCaCLick}>Capitalize &gt;</button>
            <button className="btn btn-primary mx-1" onClick={handleCoCLick}>Copy &gt;</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your words Summary:</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length}Minutes to read</p>
            <h3>Preview:</h3>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#343a40':'white', color: props.mode==='dark'?'white':'black'}} value={text} rows="15"></textarea>
                
            </div>
        </div>
        </>
    )
}
