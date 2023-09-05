import GetNavbar from "../../components/navbar";
import GetProduct from "./usecases/get_product";

const Table_Index = () => {
    return (
        <div className=''>
            <GetNavbar active="table"/>
            <div className="main-box">
                <a className="btn-primary p-2" href="/create">Create Product</a>
                <GetProduct/>
            </div>
        </div>
    );
}

export default Table_Index;