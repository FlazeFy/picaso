export default function GetNavbar({active}) {
    function getActive(val, curr){
        if(val == curr){
            return "active";
        } else {
            return "";
        }
    }

    return  <nav className="flex justify-between items-center space-x-4 pt-2 pb-4 mt-2 shadow-lg">
        <div>
            <img className="img logo ms-4" src="../../assets/logo/logo-color.png"></img>
        </div>
        <div>
            <a href="/" className={getActive(active,"home")}><span>Home</span></a>
            <a href="/products" className={getActive(active,"products")}><span>Products</span></a>
            <a href="/table" className={getActive(active,"table")}><span>Table</span></a>
            <a href=""><span></span></a>
            {/* <a href="" className="btn-primary-outlined me-2"><i className="fa-solid fa-bars"></i></a> */}
        </div>
        <div className="pt-2">
            <a href="/login" className="btn-primary-outlined me-2"><span>Login</span><i className="fa-solid fa-arrow-right-to-bracket"></i></a>
            <a href="/register" className="btn-primary me-3"><span>Register</span></a>
        </div>
    </nav>  
}