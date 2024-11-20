import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css'
import { Link } from 'react-router-dom';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);
    return (
        <div className="container my-5">
            <div className="row g-4">
                {products.map(product => (
                    <div key={product._id} className="col-md-3 d-flex align-items-stretch">
                        <Link to={`/products/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>

                            <div className="card card-list shadow-sm" style={{ width: "18rem" }}>
                                <img
                                    src={product.imageUrl}
                                    className="card-img-top"
                                    alt={product.name}
                                    style={{ height: "200px", objectFit: "contain" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text text-muted">
                                        <strong>Brand:</strong> {product.brand}<br />
                                        <strong>Price:</strong> ${product.price.toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default ProductList;