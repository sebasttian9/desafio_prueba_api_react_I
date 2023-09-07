import { useEffect, useState } from "react";
import axios from "axios";

const MiApi = () => {

    const [libros,setLibros] = useState([]);
    const baseURL = "https://www.googleapis.com/books/v1/volumes?q=react";


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
        <h1>MiApi</h1>
        <ul>
            {
                libros.map((l,index) => (
                    <li key={index}>{l.volumeInfo.title }-{ l.saleInfo.listPrice?.amount ? l.saleInfo.listPrice.amount : 'sin precio' }-{ l.saleInfo?.buyLink ? l.saleInfo.buyLink : 'sin link' }</li>
                ))
            }
        </ul>
    </div>
  )
}

export default MiApi