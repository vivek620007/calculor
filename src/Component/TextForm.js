import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText)
    }

    const handleOnChange = (events) => {
        setText(events.target.value)
    }

    const handleCopy = () => {
        const textElement = document.getElementById("myBox");
    
        if (textElement) {
            textElement.select();
            
            navigator.clipboard.writeText(textElement.value)
                .then(() => {
                    console.log('Text copied to clipboard successfully.');
                })
                .catch((error) => {
                    console.error('Error copying text to clipboard:', error);
                });
        }
        else {
            console.error('Element with id "myBox" not found.');
        }
    }
    

    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/);
        
        setText(newText.join(" "));
    }
    

    const [text, setText] = useState('');

    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className='mb-3'>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows=""></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary' onClick={handleLowClick}>Convert to Lowercase</button>
                <button className='btn btn-primary' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-primary' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className='container my-3'>
                <h1>Your text summary</h1>
                <p>{text.split("").length}word and {text.length} characters</p>
                <p>{0.008 * text.split("").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}