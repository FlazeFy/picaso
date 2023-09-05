import GetNavbar from "../../components/navbar";
import SectionPostRegis from "./usecases/post_regis";

const Register_Index = () => {
    return (
        <div className=''>
            <GetNavbar active="register"/>
            <SectionPostRegis/>
        </div>
    );
}

export default Register_Index;