import GetNavbar from "../../components/navbar";
import { useParams } from 'react-router-dom';

const Detail_Index = () => {
    const { id } = useParams()

    return (
        <div className=''>
            <GetNavbar active="detail"/>
         
        </div>
    );
}

export default Detail_Index;