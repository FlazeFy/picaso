import { useState, useEffect } from "react";
import Axios from "axios";

export default function GetProduct() {
    //Initial variable
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch("https://api-project.amandemy.co.id/api/products")
            .then(res => res.json())
            .then(
            (result) => {
                setIsLoaded(true);
                setItems(result.data);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])

    const deleteItem = async (itemId) => {
        //e.preventDefault();
        if(window.confirm("Apakah anda yakin ingin menghapus product") == true) {
            try {
                await Axios.delete("https://api-project.amandemy.co.id/api/products/"+itemId);
            } catch (err) {
                alert(err.response)
            }
            alert("Item dihapus")
        } else {
            //
        }
    };


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="glass-box">
                <div className="flex justify-between items-center mt-1">
                    <span>
                        <h1 className="text-primary">Table Product</h1>
                    </span>
                    <span>  
                        <a></a>
                    </span>
                </div>
                <table className="table">
                    <thead>
                        <tr key={"a"}>
                            <th scope="col">ID</th>
                            <td>Nama</td>
                            <td>Status Diskon</td>
                            <td>Harga</td>
                            <td>Harga Diskon</td>
                            <td>Gambar</td>
                            <td>Kategori</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, i, idx) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">{item['id']}</th>
                                        <td>{item['name']}</td>
                                        <td>{item['harga_display']}</td>
                                        <td>
                                            {
                                                item['is_diskon'] === true ? "Aktif" : "Mati"
                                            }
                                        </td>
                                        <td>{item['harga_diskon_display']}</td>
                                        <td><img src={item['image_url']} style={{maxWidth:"300px"}}></img></td>
                                        <td>{item['category']}</td>
                                        <td>
                                            <a className="btn-primary p-2 mx-1" href={"/edit/"+item['id']}>Update</a>
                                            <button className="btn-danger p-2 mx-1" onClick={() => deleteItem(item['id'])}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}