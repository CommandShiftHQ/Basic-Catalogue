import React from 'react';

const ProductDetails = () => {
    const productListWrap = {
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto'
    }

    const productListHeader = {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginBottom: '10px'
    }

    const productItemWrap = {
        border: '2px solid black',
        padding: '10px',
        marginBottom: '30px'
    }

    return (
        <div style={productListWrap}>
            <div style={productItemWrap}>
                <div style={productListHeader}>
                    <div>Selected product</div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;