
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, {useState} from 'react';
import {Routes,   Route, } from 'react-router-dom';
import ContactMe from './Components/ContactMe';


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
      document.title = 'STRiiXER - Dark Mode'
    }
    else{
      setmode  ('light')
      showAlert("Light mode has been enabled","success")
      document.title = 'STRiiXER - Light Mode'
      // interval to show msgs on tab
      setInterval(() => {
        document.title = 'STRiiXER is Amazing'
      }, 3000);
      // setInterval(() => {
      //   document.title =  'Download Now!'
      // }, 1500);
    }
  }
  return (
   <>
   <div>
   <Navbar title= 'STRiiXER' aboutxt= 'About' mode={mode} toggleMode={toggleMode}/>
   < Alert alert={alert}/>
   < div className='container my-3'/>

<Routes>
  <Route path='/about' element={<About/>} />
  {/* <Route path ='/main' element ={<div className='container'><TextForm showAlert={showAlert} heading='Enter the Text '/></div>}></Route> */}
  <Route path = '/main' element = {<div className='container'><TextForm showAlert={showAlert} heading='Enter the Text '/></div>}></Route>
  <Route path = '/contactme' element = {<ContactMe/>}></Route>
  
</Routes>

   {/* <Routes>
          <Route exact path="/About">
            <About />
          </Route>
         
          <Route exact path="/TextForm">
          <TextForm showAlert={showAlert} heading='Enter the Text '/>
          </Route>
   </Routes> */}
   {/* <div className='container'><TextForm showAlert={showAlert} heading='Enter the Text '/></div> */}
   {/* <About/> */}
   </div>
   </>
  );
}

export default App;
