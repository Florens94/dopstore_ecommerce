import NavBar from '../NavBar/NavBar'
import {useContext} from 'react'
import CartContext from '../../Context/CartContext'


export const Page = ({children, id}) => {
    const {qty} = useContext(CartContext)

    console.log('cart=>', qty)
    

    return (
        <main>
            <NavBar cartQty={qty}/>
            <section>
                {children}
            </section>
        </main>
    )
}