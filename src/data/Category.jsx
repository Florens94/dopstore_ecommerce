// import { Fragment } from 'react'
// import { Item } from '../components/item/item'
// import { Page } from '../components/Page/Page'
// import { useParams } from 'react-router-dom'
// // import items from '../data/items.json'
// // import styles from '../styles/pages/category.module.scss'

// const Category = () => {
// 	const { categoryName } = useParams()
// 	// const products = items.filter((item) => item.category === categoryName)
//     const lentes = database.collection('lentes').where('categoria', '==', categoria)

// 	return (
// 		<Page id={`category_${categoryName}`}>
// 			<Fragment>
// 				<h1 className={styles.title}>
// 					{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
// 				</h1>
// 				<div className={styles.list}>
// 					{products.map((item) => (
// 						<Item
// 							key={item.name}
// 							image={item.image}
// 							name={item.name}
// 							price={item.price}
// 						/>
// 					))}
// 				</div>
// 			</Fragment>
// 		</Page>
// 	)
// }

// export default Category
