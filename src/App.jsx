import { useState } from 'react'
import MiApi from './components/MiApi'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbarh from './components/Navbarh'
import Footer from './components/Footer';

function App() {
  
  const [libroBuscar, setLibroBuscar] = useState('Javascript');

  return (
    <>
      <Navbarh></Navbarh>
      <div className='container'>
      <MiApi libroBuscar={libroBuscar} setLibroBuscar={setLibroBuscar}/>
    </div>
    <Footer></Footer>
    </>

  )
}

export default App
