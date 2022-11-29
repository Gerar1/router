import { useParams } from "react-router-dom";
const ProductDetails = () =>{
    const params = useParams();
    return ( <h2>En mi opinión este programador esta en el puesto N°: {params.prodcutId}</h2>);
}

export default ProductDetails;