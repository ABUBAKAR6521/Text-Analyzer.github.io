import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import Alert from './components/Alert';
import './App.css';
import React, {useState} from 'react';
import{
  Routes,
  Route
}from "react-router-dom"

function App() {

  const [mode,changeMode] = useState("light")
  const toggleMode = () =>{
  if(mode ==="light"){
    changeMode("dark")
    document.body.style.backgroundColor="#042743"
    document.body.style.color="white"
    showAlert("Sucess, Dark Mode is Enabled")


  }else{
    changeMode("light")
    document.body.style.backgroundColor="white"
    document.body.style.color="black"
    showAlert("Sucess, Light Mode is Enabled")

  }
  }

  const toggleMode2=() =>{
    if(mode ==="light"){
      changeMode("dark")
      document.body.style.backgroundColor="rgb(114 47 47)"
      document.body.style.color="white"
      showAlert("Sucess,Red Dark Mode is Enabled")
  
    }else{
      changeMode("light")
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      showAlert("Sucess,Light Mode is Enabled")

    }
  }
  const toggleMode3=() =>{
    if(mode ==="light"){
      changeMode("dark")
      document.body.style.backgroundColor="rgb(41 83 32 / 99%)"
      document.body.style.color="white"
      showAlert("Sucess,Green Dark Mode is Enabled")
  
    }else{
      changeMode("light")
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      showAlert("Success,Light Mode is Enabled")

    }
  }

  const [alert,setAlert] = useState(null)

  const showAlert = (type,message)=>{
setAlert({
  type : type,
  msg : message
})
setTimeout(() => {
  setAlert(null);
}, 1500);
  }

  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2} toggleMode3={toggleMode3}/>
    <Alert alert={alert}/>
    <div className="container mt-3">

    
    <Routes>
      <Route path="/" element={<Textform heading={"Enter Your Text Here"} mode={mode} showAlert={showAlert}/>}/>
     
  
    </Routes>
    </div>
  
    
    
    </>
  );
}

export default App;
