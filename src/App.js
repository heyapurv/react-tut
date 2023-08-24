
import './App.css';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, {useState} from 'react';


function App() {
  const [mode, setmode] = useState('light') //Whether dark mode is enabled or not
  const toggleMode =() =>{
    if(mode === 'light'){
      setmode('dark')
    }
    else{
      setmode  ('light')
    }
  }
  return (
   <><div>
   <Navbar title= 'STRiiXER' aboutxt= 'About' mode={mode} toggleMode={toggleMode}/>
   < div className='container my-3'/>
   <div className='container'><TextForm heading='Enter the Text '/></div>
   {/* <About/> */}
   </div>
   </>
  );
}

export default App;
