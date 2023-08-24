
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, {useState} from 'react';


function App() {
  const [mode, setmode] = useState('light') //Whether dark mode is enabled or not
  const[alert, setalert] = useState()
  const showAlert =(message, type) =>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const toggleMode =() =>{
    if(mode === 'light'){
      setmode('dark')
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setmode  ('light')
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
   <>
   <div>
   <Navbar title= 'STRiiXER' aboutxt= 'About' mode={mode} toggleMode={toggleMode}/>
   < Alert alert={alert}/>
   < div className='container my-3'/>
   <div className='container'><TextForm showAlert={showAlert} heading='Enter the Text '/></div>
   {/* <About/> */}
   </div>
   </>
  );
}

export default App;
