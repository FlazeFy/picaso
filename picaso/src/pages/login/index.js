import GetNavbar from "../../components/navbar";
import SectionPostLogin from "./usecases/post_login";

const Login_Index = () => {
    return (
        <div className=''>
            <GetNavbar active="login"/>
            <SectionPostLogin/>
        </div>
    );
}

export default Login_Index;