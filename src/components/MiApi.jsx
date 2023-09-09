import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import Buscador from './Buscador'

const MiApi = ({libroBuscar,setLibroBuscar}) => {

    const [libros,setLibros] = useState([]);
    const baseURL = `https://www.googleapis.com/books/v1/volumes?q=${libroBuscar}&maxResults=20&key=AIzaSyCnfYImFuvL3g3aIBFOqx4-tNxELcOtHzo`;

    console.log(baseURL)

    const llamadaApi = () => {

        try {
            
            axios.get(baseURL).then((response) => {
                setLibros(response.data.items);
            });

        } catch (error) {

            console.error("Something bad happened");
            console.error(error);
        }

    }

    

useEffect(() => {
    
    llamadaApi();
}, [libroBuscar]);    

  return (
    <div>
        <h1 className="mt-5" id='buscar'>Buscador libros</h1>
        <Buscador setLibroBuscar={setLibroBuscar}/>
        <Table striped bordered hover size="lg" className="mt-3">
            <thead>
                        <th>Titulo</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Comprar</th>
                    </thead>
                    <tbody>             
            {
              libros ?   libros.sort((a, b) => a.volumeInfo.title > b.volumeInfo.title ? 1 : -1).map((l,index) => (
                    <tr key={index}>
                        <td>{ l.volumeInfo.title }</td>
                        <td>{ l.saleInfo.listPrice?.amount ? l.saleInfo.listPrice.amount : 'sin precio' }</td>
                        <td>{ l.volumeInfo.imageLinks?.smallThumbnail ? <img src={l.volumeInfo.imageLinks?.smallThumbnail} className="img-listado" width="100px"></img> : 'Sin img' }</td>
                        <td>{ l.saleInfo?.buyLink ? <a target="_blank" href={l.saleInfo?.buyLink}>Comprar</a> : 'sin link' }</td>
                    </tr>
                )) : <tr><td className="text-center" colSpan={4}>No se encontraron resultados</td></tr>
            }
            </tbody>
        </Table>
    </div>
  )
}

export default MiApi