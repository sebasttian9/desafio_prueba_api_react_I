import { useState } from 'react'
import MiApi from './components/MiApi'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  const [libroBuscar, setLibroBuscar] = useState('Javascript');

  return (
    <div className='container'>
      <MiApi libroBuscar={libroBuscar}/>
    </div>
  )
}

export default App
