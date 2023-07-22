import React, {useState} from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState("")
    
    const handleUpCase = () =>{
    let newText =  Text.toUpperCase()
    setText(newText)
    props.showAlert("SUCCESS,YOUR TEXT IS CONVERTED TO UPPERCASE")
    }
    const handleLowCase = () =>{
    let newText =  Text.toLocaleLowerCase()
    setText(newText)
    props.showAlert("success,your text is converted to lowercase")

    }
    const handleRemoveCase = () =>{
    let newText = ""
    setText(newText)
    props.showAlert("Success,Text Deleted Succefully")

    }
    const handleCopyCase = () =>{
    let text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("SUCCESS,Your Text Is Copied Successfully")

    }
    const RemoveSpaces = () =>{
    let newText =  Text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Success,Extra Spaces Removed Succefully")

    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    
  return (
    <>


    <h1 className={`text-${props.mode ==="light"?"dark":"light"}`}>{props.heading}</h1>

    <div className="mb-3 mt-3">
  <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>

<button className='btn btn-primary me-2' onClick={handleUpCase} >Convert To Upper Case</button>
<button className='btn btn-primary me-2' onClick={handleLowCase}>Convert To Lower Case</button>
<button className='btn btn-primary me-2' onClick={handleRemoveCase}>Delete Text</button>
<button className='btn btn-primary me-2' onClick={handleCopyCase}>Copy Text</button>
<button className='btn btn-primary me-2' onClick={RemoveSpaces}>Remove Extra Spaces</button>

<h1 className={`mt-3 text-${props.mode ==="light"?"dark":"light"}`}>Text Summary</h1>
<p >{Text.split(" ").length - 1} Words and {Text.length} Characters </p>
<p>{0.008 * Text.split(" ").length} Minutes Required To Read This Text</p>


<h1 className={`mt-3 text-${props.mode ==="light"?"dark":"light"}`}>Your Text Preview</h1>
<p>{Text}</p>
    
    
    </>
  )
}
