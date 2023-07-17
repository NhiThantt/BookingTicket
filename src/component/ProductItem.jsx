import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const {name, image, price} = this.props.sp;
    return (
      <div className='card p-3 mb-4'>
        <img src={image} alt="" />
        <h5 style = {{fontSize:14.3, textTransform:'uppercase', color:"blue"}}>{name}</h5>
        <p>Price: <span style={{color:'red', fontWeight:700}}>${price}</span></p>
        <div className='d-flex justify-content-center'>
            <button onClick={() => {this.props.setSelectedProduct(this.props.sp); this.props.onShowDetail()}} className='btn btn-danger me-3'>Detail</button>
            <button onClick={() => this.props.onAddToCart(this.props.sp)} className='btn btn-success'>Add to Cart</button>
        </div>
      </div>
    )
  }
}
