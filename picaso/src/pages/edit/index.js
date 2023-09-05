import GetNavbar from "../../components/navbar";
import { useParams } from 'react-router-dom';
import SectionEditProduct from "./usecases/put_product";

const Edit_Index = () => {
    const { id } = useParams()

    return (
        <div className=''>
            <GetNavbar active="table"/>
            <div className="main-box">
                <SectionEditProduct id={id}/>
            </div>
        </div>
    );
}

export default Edit_Index;