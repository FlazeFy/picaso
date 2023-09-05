import GetCatalogBox from "../../../components/containers/catalog";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function GetTopCatalog() {
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

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="glass-box">
                <div className="flex justify-between items-center mt-1">
                    <span>
                        <h1 className="text-primary">Product Catalog</h1>
                    </span>
                    <span>  
                        <a href="/products" className="btn-primary-outlined me-2 px-3 py-2">See More</a>
                    </span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {
                        items.slice(0, 4).map((val, i, index) => {
                            return (
                                <GetCatalogBox item={val} key={i}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}