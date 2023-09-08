import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';

const Buscador = () => {

    
    
    

  const buscar = (e) => {
      e.preventDefault();
      
      const textoBuscar = e.target.value;

      const nuevoListado = colaboradores.filter((c) => c.nombre.toLowerCase().includes(textoBuscar.toLowerCase()) || 
                                                       c.correo.toLowerCase().includes(textoBuscar.toLowerCase()) ||
                                                       c.cargo.toLowerCase().includes(textoBuscar.toLowerCase()) ||
                                                       c.telefono.toLowerCase().includes(textoBuscar.toLowerCase()) || 
                                                       c.edad.toLowerCase().includes(textoBuscar.toLowerCase()));

      setlistadoFiltrado(nuevoListado);

      // if(textoBuscar){
      //   editColaborador(nuevoListado);
      //   // console.log(textoBuscar+'1')
      // }else{
      //   editColaborador(original);
      //   // console.log('nada'+textoBuscar+'')
      // }
  }



  return (
    <div>
        <Form onSubmit={buscar}>
            
            <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-success" type="submit" id="button-addon2">
          Button
        </Button>
      </InputGroup>
        </Form>
    </div>
  )
}

export default Buscador