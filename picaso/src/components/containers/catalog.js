export default function GetCatalogBox({item}) {
    return  <a className="product-box p-0" href={"detail/"+item.id}>
        <img src={item.image_url}></img>
        <div className="desc">
            <h6>{item.name}</h6>
            <p>{item.description}</p>
            {
                !item.is_diskon ? (
                        <h6 className="text-primary">{item.harga_display}</h6>
                    ) : (
                        <h6 className="text-success"><s className="text-primary">{item.harga_display}</s> {item.harga_diskon_display}</h6>
                )
            }
            <h6 className="text-primary">{item.stock} <span className="text-sm">Stock</span></h6>
        </div>
    </a>
}