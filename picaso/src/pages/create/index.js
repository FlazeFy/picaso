import GetNavbar from "../../components/navbar";
import SectionAddProduct from "./usecases/post_product";

const Create_Index = () => {
    return (
        <div className=''>
            <GetNavbar active="table"/>
            <div className="main-box">
                <SectionAddProduct/>
            </div>
        </div>
    );
}

export default Create_Index;