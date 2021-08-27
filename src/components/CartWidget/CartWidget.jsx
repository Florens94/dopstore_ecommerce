import React from 'react'
import {Link} from 'react-router-dom'
import bag from "./bag.png"
import './cartwidget.scss'
import useCartContext from '../../Context/CartContext'


const CartWidget = () => {
    const {cartWidgetCount} = useCartContext()
   
        return(
            <>
            
                <Link to= {'/cart'} className='cart-widget'>
                <div className="bag-icon">
                    <img class='bag-icon' src={bag} alt={"bag"}/>
                    <p className="items">({cartWidgetCount()})</p>
                </div>
                </Link>
                
            </>
        )

    

}


export default CartWidget;

