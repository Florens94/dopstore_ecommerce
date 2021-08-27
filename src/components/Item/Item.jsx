import React from "react"
import { Link } from 'react-router-dom'
import './item.scss'

const Item = ({item: { id, name, price, img }}) => {
    return(
        <div className="card-product">
            <h3>{name}</h3>
            <img src={img} alt={id} width="350" />
            <p>{price} USD </p>
            <Link to={`/item/${id}`}> <button>Ver producto</button> </Link>
            
        </div>
    )
    
}
export default Item