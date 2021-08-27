import React, {useState} from 'react'
import './itemcount.scss'

const ItemCount = ({stock,  initial, onAdd}) =>{
    const [count, setCount] = useState(initial)
       
    const increase = () => { 
        if(count < stock){
            setCount(count + 1)
            
        }
        
    }

    const decrease = () => { 
        if(count > initial){
            setCount(count - 1)
        }
    }

    onAdd(count)

    return(
        <div className="card-count">
            <div className="grid">
              <button className="column product-subtract" onClick={decrease} disabled={count === initial} >➖</button>
              <div className="column product-qty">AGREGAR {count} </div>
              <button className="column product-plus" onClick={increase} disabled={count === stock} >➕</button>
            </div>
        </div>
    )
}

export default ItemCount
