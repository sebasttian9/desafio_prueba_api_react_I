import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import Buscador from './Buscador'

const MiApi = ({libroBuscar}) => {

    const [libros,setLibros] = useState([]);
    const baseURL = `https://www.googleapis.com/books/v1/volumes?q=${libroBuscar}&maxResults=40`;


    const llamadaApi = () => {

            axios.get(baseURL).then((response) => {
                    setLibros(response.data.items);
                    console.log(response.data.items)
                    // console.log(libros)
            });
    }

    

useEffect(() => {
    
    llamadaApi();
}, []);    

  return (
    <div>
        <h1 className="mt-5">Buscador libros Google</h1>
        <Buscador/>
        <Table striped bordered hover size="lg" className="mt-3">
            <thead>
                        <th>Titulo</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Comprar</th>
                    </thead>
                    <tbody>             
            {
                libros.map((l,index) => (
                    <tr key={index}>
                        <td>{ l.volumeInfo.title }</td>
                        <td>{ l.volumeInfo.title }</td>
                        <td>{ l.saleInfo.listPrice?.amount ? l.saleInfo.listPrice.amount : 'sin precio' }</td>
                        <td>{ l.saleInfo?.buyLink ? <a target="_blank" href={l.saleInfo?.buyLink}>Comprar</a> : 'sin link' }</td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    </div>
  )
}

export default MiApi