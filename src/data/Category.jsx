import { Fragment, useState } from 'react'
import Item from '../components/Item/Item'
import { useParams } from 'react-router-dom'
import {database} from '../firebase'

const Category = () => {
		const [productosAMostrar, setProductosAMostrar] =useState([])
		
		  const categoria = "nikon"
		  const lentes = database.collection('lentes').where('categoria', '==', categoria)
		  lentes.get().then((query)=>setProductosAMostrar({...query.docs[0].data(), id:query.docs[0].id}))
		lentes
		.get()
		.then((query)=>
		setProductosAMostrar(query.docs.map(doc => {
		  return{...doc.data(), id: doc.id}})))
	
	return (

			<Fragment>
				<h1>
					{categoria.charAt(0).toUpperCase()}
				</h1>
				<div>
					{lentes.map((item) => (
						<Item
							key={item.name}
							image={item.image}
							name={item.name}
							price={item.price}
						/>
					))}
				</div>
			</Fragment>

	)
}

export default Category
