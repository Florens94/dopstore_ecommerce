<<<<<<< HEAD
import { Fragment, useState } from 'react'
=======
import { Fragment } from 'react'
>>>>>>> 3ae06028347ec5f9119f79b214c2b63673ec0f66
import Item from '../components/Item/Item'
import { useParams } from 'react-router-dom'
import {database} from '../firebase'

const Category = () => {
<<<<<<< HEAD
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
=======
	const { categoryName } = useParams()
	const products = products.filter((item) => item.category === categoryName)
    const lentes = database.collection('lentes').where('category', '===', categoryName)

	return (

			<Fragment>
				<h1>
					{categoryName.charAt(0).toUpperCase()}
>>>>>>> 3ae06028347ec5f9119f79b214c2b63673ec0f66
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
<<<<<<< HEAD

	)
}

export default Category
=======

	)
}

export default Category

>>>>>>> 3ae06028347ec5f9119f79b214c2b63673ec0f66
