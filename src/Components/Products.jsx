import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState([]);
    let componenetMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componenetMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componenetMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={()=> setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("electronics")}>Electronics</button>
                </div>
                <div className="container">
                    <div className="row">
                    {filter.map((products) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={products.id} style={{width:"18rem"}}>
                                    <img className="card-img-top" src={products.image} alt={products.title} height="250px"/>
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{products.title.substring(0,12)}...</h5>
                                            <p className="card-text lead fw-bold"> Rs.{products.price}</p>
                                            <NavLink to={`/products/${products.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                        </div>
                                </div>
                            </div>
                        </>
                            )
                    })}
                    </div>
                </div>
                
            </>
        )

    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center"></div>
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    )
}

export default Products
