import { useState, useEffect } from "react";
import Axios from "axios";

export default function SectionEditProduct({id}) {
    //Initial variable
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    let [name, setName] = useState("");
    let [harga, setHarga] = useState(0);
    let [stock, setStock] = useState(0);
    let [image_url, setImageUrl] = useState("");
    let [is_diskon, setIsDiskon] = useState(false);
    let [harga_diskon, setHargaDiskon] = useState(0);
    let [category, setCategory] = useState("");
    let [description, setDescription] = useState("");

    useEffect(() => {
        fetch("https://api-project.amandemy.co.id/api/products/"+id)
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

    const resetForm = (e) => {
        const inputs = document.querySelectorAll('input');
        const textareas = document.querySelectorAll('textarea');

        inputs.forEach(function(el) {
            el.value = '';
        });
        textareas.forEach(function(el) {
            el.value = '';
        });
    };

    const editProduct = async (id) => {
        // e.preventDefault();
        try {
            await Axios.put("https://api-project.amandemy.co.id/api/products/"+id, {
                name,
                harga,
                stock,
                image_url,
                is_diskon,
                harga_diskon,
                category,
                description
            });
        } catch (err) {
            alert(err.response.data.info)
        }
    };

    const toogleDiscount = (e) =>{
        document.getElementById("prod-discount").hidden = !e
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        name = items['name'];
        harga = items['harga'];
        stock = items['stock'];
        image_url = items['image_url'];
        is_diskon = items['is_diskon'];
        harga_diskon = items['harga_diskon'];
        category = items['category'];
        description = items['description'];

        return (
            <section>
                <h1>Update Product</h1>
                <div className="grid grid-cols-3 gap-3 form-group">
                    <div className="pr-4">
                        <label htmlFor="prod-name">Product Name</label>
                        <input type="text" id="prod-name" className="form-input w-full my-2" placeholder="ex : Red Chair" defaultValue={name} onChange={(e) => setName(e.target.value)} required></input>
                        <label htmlFor="prod-price" className="mb-8">Normal Price</label>
                        <input type="number" id="prod-price" className="form-input w-full my-2" placeholder="ex : 180000" defaultValue={items['harga']} onChange={(e) => setHarga(e.target.value)} required></input>
                        <label htmlFor="prod-category">Product Category</label>
                        <select id="prod-category" name="prod-category" className="form-input w-full my-2" onChange={(e) => setCategory(e.target.value)}>
                            <option value="teknologi" selected>Teknologi</option>
                            <option value="makanan">Makanan</option>
                            <option value="minuman">Minuman</option>
                            <option value="hiburan">Hiburan</option>
                            <option value="kendaraan">Kendaraan</option>
                        </select>
                    </div>
                    <div className="pr-4">
                        <label htmlFor="prod-stock">Stock</label>
                        <input type="number" id="prod-stock" className="form-input w-full my-2" placeholder="ex : 20" defaultValue={items['stock']} onChange={(e) => setStock(e.target.value)} required></input>
                        <label htmlFor="prod-name">Image URL</label>
                        <input type="text" id="prod-img-url" className="form-input w-full my-2" placeholder="ex : https://api-project.amandemy.co.id/images/sepeda.jpg" defaultValue={items['image_url']} onChange={(e) => setImageUrl(e.target.value)} required></input>
                        <div className="flex justify-between items-center">
                            <span>
                                <label htmlFor="prod-discount" className="mb-8">Discount Price</label>
                            </span>
                            <span>
                                {
                                    items['is_diskon'] == true ?
                                        <input type="checkbox" id="prod-discount-status" name="prod-discount-status" checked onChange={(e) => {setIsDiskon(e.target.checked); toogleDiscount(e.target.checked)}}></input>
                                    :
                                        <input type="checkbox" id="prod-discount-status" name="prod-discount-status" uncheck onChange={(e) => {setIsDiskon(e.target.checked); toogleDiscount(e.target.checked)}}></input>
                                }
                                <label htmlFor="prod-discount-status"> Discount Status</label><br></br>
                            </span>
                        </div>
                        {
                            items['is_diskon'] == true ?
                                <input type="number" id="prod-discount" className="form-input w-full my-2" placeholder="ex : 20000" defaultValue={items['harga_diskon']} onChange={(e) => setHargaDiskon(e.target.value)}></input>
                            :
                                <input type="number" id="prod-discount" className="form-input w-full my-2" placeholder="ex : 20000" hidden onChange={(e) => setHargaDiskon(e.target.value)}></input>
                        }
                    </div>
                    <div className="pr-4">
                        <label htmlFor="prod-image" className="mb-4">Image</label>
                        <div className="flex items-center justify-center w-full my-2">
                            <label htmlFor="prod-image" className="flex flex-col items-center justify-center w-full form-file">
                                <div className="flex flex-col items-center justify-center py-5">
                                    <i className="fa-solid fa-cloud-arrow-up fa-xl"></i><br></br>
                                    <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or <span className="font-semibold">drag</span> and <span className="font-semibold">drop</span></p>
                                    <p className="text-xs">SVG, PNG, JPG or GIF</p>
                                </div>
                                <input id="prod-image" type="file" className="hidden" />
                            </label>
                        </div> 
                    </div>
                </div>
    
                <label htmlFor="prod-image" className="mb-4">Description</label>
                <textarea id="editor" rows="8" className="form-input w-full my-2" placeholder="Write something..." onChange={(e) => setDescription(e.target.value)} defaultValue={items['description']} required></textarea>                
                <div className="grid justify-items-stretch">
                    <div className="justify-self-end">
                        <button className="btn-primary px-3 py-2" onClick={resetForm}>Cancel</button>
                        <button className="btn-submit px-3 py-2" onClick={() => editProduct(id)}>Publish Product</button>
                    </div>  
                </div>    
            </section>
        )
    }
}