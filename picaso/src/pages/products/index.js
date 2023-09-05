import GetNavbar from "../../components/navbar";
import GetCatalog from "./usecases/get_catalog";

const Product_Index = () => {
    return (
        <div className=''>
            <GetNavbar active="products"/>
            <GetCatalog/>
        </div>
    );
}

export default Product_Index;