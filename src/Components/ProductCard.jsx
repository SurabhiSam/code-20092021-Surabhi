import React from 'react'
import{link} from 'react-router-dom'

function ProductCard(props) {
  console.log(props);
    return (
      <div className="card col-md-3 m-2" >
      <img className="card-img-top" src={props.product.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.product.name}</h5>
        <p className="card-text">{props.product.description}.</p>
        <a href="#" class="btn btn-primary">View</a>
      </div>
    </div>
          
    )
}

export default ProductCard
