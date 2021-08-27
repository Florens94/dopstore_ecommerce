import React, { useState } from 'react';
import './cart.scss'
import useCartContext from '../../Context/CartContext'
import {Link} from 'react-router-dom';
import firebase from "firebase/app"
import "firebase/firestore"
import { getFirestore } from '../../firebase'
import Form from '../Checkout/Form'

const Cart = () => {
    const {products, removeItem, totalProductsPrice, cleanListCart} = useCartContext()
    const [showForm, setShowForm] = useState(false)
    const [orderId, setOrderId] = useState("")
    const [confirmation, setConfirmation] = useState(false)
    
    const handleRemove = (i) => {
        removeItem(i.id)
    }
    
    const handleFinalize = () =>{
        setShowForm(true)
    }

    const createOrder = (buyer) =>{
        const db = getFirestore()
        const orders = db.collection('order')
        const newOrder = {
            buyer,
            products,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalProductsPrice()
        }
        
        orders.add(newOrder).then(({id}) => {
                setOrderId(id)
                setConfirmation(true)
                
            }
        ).catch((e) => {console.log(e)})
        
        const Itemscollection = db.collection("ItemCollection")
        const batch = getFirestore().batch()

        products.forEach( p => {
            batch.update(Itemscollection.doc(p.id),{stock:p.stock - p.quantity})
        })
        batch.commit()
            .then(()=>{
                    console.log("compraOK")
                    cleanListCart()
            })
            .catch(error=>console.log(error))
        
    }

    console.log("Confirmacion =>",confirmation)
    console.log("orderId =>",orderId)
    
    if(products.length === 0 && orderId === ""){
        return (
            <div className="cart">
                <div className="heading cf">
                    <h3>Tu mochila está vacía 🎒😭</h3>
                    <Link to="/">
                        <button className = "continue">Elegir productos</button>
                    </Link>
                </div>   
            </div>
        )
    }else if(orderId && confirmation){
        return(
            <div className="cart">
                <div className="heading cf">
                    <h3>Su Orden No. <span className="validation">{orderId}</span> ha sido confirmada</h3>
                    <Link to="/" >
                        <button className = "continue">Seguir comprando</button>
                    </Link>
                </div>
            </div>
        )
    }
        
    return(
        <section className="cart">
            <div className="heading cf">
                <h2>Carrito de Compras</h2>
                <Link to="/" exact>
                    <button className = "continue">Seguir comprando</button>
                </Link>
            </div>
            <div className="shopping-cart">
                
                {products.map((item) => (
                    <div className="product">
                        <div className="product-image">
                            <img src={item.img} alt={item.id}/>
                        </div>
                        <div className="product-details">
                            <h2>{item.name}</h2>
                            <div className="product-removal">
                                <button class="remove-product" onClick={()=>handleRemove(item)}> 
                                    <p>🗑️</p>
                                </button>
                            </div>
                        </div> 
                        <div className="product-price">
                            <label htmlFor="price">Precio </label>
                            <span className="price">{item.price} USD</span>
                        </div>
                        <div className="product-quantity">
                            <label htmlFor="quantity">Cantidad: </label>
                            <span className="quantity">{item.quantity}</span>
                        </div>
                        <div className="product-line-price">
                            <label htmlFor="total">Total: </label>
                            <span className="total"> {item.quantity*item.price} USD </span>
                        </div>
                    </div>
                    )
                )}

            </div>
            <div className="totals" >
                    <div class="totals-item">
                        <label>Subtotal</label>
                        <div class="totals-value">{totalProductsPrice()}</div>
                    </div>
                    <div class="totals-item">
                        <label>Costo de envío</label>
                        <div class="totals-value"> GRATIS</div>
                    </div>
                    <div class="totals-item t-price">
                        <label>Total a pagar</label>
                        <div class="totals-value t-price">{totalProductsPrice() + 0}</div>
                    </div>
                    <div className="totals-item">
                        <button className ="checkout" onClick={handleFinalize}>Confirmar compra</button>
                    </div>
                    
            </div>
            {showForm ? <Form createOrder={createOrder}/> : null}
        </section>

    )
}
export default Cart;