import { useParams } from "react-router-dom";
const ProductDetails = () =>{
    const params = useParams();
    return ( <h2>: {params.prodcutId}</h2>);
}

export default ProductDetails;