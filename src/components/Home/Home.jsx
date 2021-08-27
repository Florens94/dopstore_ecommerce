import React from "react"
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './home.scss'

const Home= () => {
    return(
        <section className="home">
            <div>
            <h1>HORA AZUL DoP STORE</h1>
            <p>Todos nuestros productos</p>
            </div>
            <ItemListContainer/>
        </section>
    )
}
export default Home