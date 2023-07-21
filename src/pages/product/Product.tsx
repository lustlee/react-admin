import'./product.scss';
import Single from "../../components/single/Single.tsx";
import {singleProduct} from "../../data.ts";

const Product = () => {

    // Fetch data send to single component
    return (
        <div className='product'>
            <Single {...singleProduct}/>
        </div>
    );
};

export default Product;
