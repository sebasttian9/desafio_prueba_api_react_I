import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Buscador = ({setLibroBuscar}) => {



  const buscar = (e) => {
      e.preventDefault();
      
      setLibroBuscar(e.target[0].value);
      
  }



  return (
    <div>
        <Form onSubmit={buscar} >
            
            <InputGroup className="mb-3">
        <Form.Control
          placeholder="Ingrese texto"
          aria-label="Ingrese texto"
          aria-describedby="basic-addon2"
          required
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