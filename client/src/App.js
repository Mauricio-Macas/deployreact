import React ,{useState} from 'react';
import Main from './components/MainPage/MainPage'
import UploadButton from './components/UploadButton/UploadButton';

function App() {

   const [imageSrc, setImageSrc] = useState();
   const [isOpen, setIsOpen] = useState(true)
   function updateImageSrc (filepath) {
     setImageSrc(filepath)
   }
   
   function openHome() {
      setIsOpen(false)
   }
   
   if(isOpen) {return (
      <div className="App">
         <div >
         <div className= 'logo'>
         <h1 className = 'logo-text'>Generador de Memes</h1>
         </div>
         <div>
         <UploadButton updateImageSrc = {updateImageSrc} openMain = {openHome}/> 
         </div>
      </div>
      </div>   
   )} 
   else {
      if(!imageSrc) return 'loading...'
   }
return (   
   <Main imageSrc = {imageSrc}/>
)
}

export default App;
