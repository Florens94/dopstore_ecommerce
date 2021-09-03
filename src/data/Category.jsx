import { Fragment } from 'react'
import Item from '../components/Item/Item'
import { useParams } from 'react-router-dom'
import {database} from '../firebase'

const Category = () => {
	const { categoryName } = useParams()
	const products = products.filter((item) => item.category === categoryName)
    const lentes = database.collection('lentes').where('category', '===', categoryName)

	return (

			<Fragment>
				<h1>
					{categoryName.charAt(0).toUpperCase()}
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

