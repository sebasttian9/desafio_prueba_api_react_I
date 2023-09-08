import { useState } from 'react'
import MiApi from './components/MiApi'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  const [libroBuscar, setLibroBuscar] = useState('Javascript');

  return (
    <div className='container'>
      <MiApi libroBuscar={libroBuscar} setLibroBuscar={setLibroBuscar}/>
    </div>
  )
}

export default App
