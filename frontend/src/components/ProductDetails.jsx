import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
    const { id } = useParams(); // Extract product ID from URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error('Error fetching product details:', error));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container my-5">
            <div className="card  card-detail shadow-sm">

                <h3 className="card-title">{product.name}</h3>
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="card-img-top"
                    style={{ height: '400px', objectFit: 'contain' }}
                />
                <div className="card-body">
                    <p className="card-text">
                        <strong>Brand:</strong> {product.brand}<br />
                        <strong>Price:</strong> ${product.price.toFixed(2)}<br />
                        <strong>Description:</strong> {product.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
