import GetNavbar from "../../components/navbar";
import GetBanner from "./usecases/get_banner";
import GetTopCatalog from "./usecases/get_top_product";

const Home_Index = () => {
    return (
        <div className=''>
            <GetNavbar active="home"/>
            <GetBanner/>
            <GetTopCatalog/>
        </div>
    );
}

export default Home_Index;