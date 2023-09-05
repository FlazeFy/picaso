export default function GetBanner() {
    return (
        <div id="carouselExampleControls" className="carousel slide position-relative" data-bs-ride="carousel">
            <div className="carousel-inner pt-4">
                <div className="carousel-item active">
                    <img src="https://api-project.amandemy.co.id/images/sepeda.jpg"></img>
                </div>
                <div className="carousel-item">
                    <img src="https://api-project.amandemy.co.id/images/headphone.jpg"></img>
                </div>  
                <div className="carousel-item">
                    <img src="https://api-project.amandemy.co.id/images/earphone.jpg"></img>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <i className="fa-solid fa-arrow-left" width="24px"></i>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <i className="fa-solid fa-arrow-right" width="24px"></i>
            </button>
        </div>
    )
}