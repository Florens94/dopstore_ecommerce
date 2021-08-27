import React, {useState, useEffect} from 'react';
import ItemList from '../itemList/ItemList';
//import {Products} from "../../listProducts";
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase'

const ItemListContainer = () => {

    const [list, setList] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        const db = getFirestore()
        let itemCollection

        if (category){
            itemCollection = db.collection("lentes").where("category", "===", category)
        } else{
            itemCollection = db.collection("lentes")
        }
        
        const itemCollectionQuery = itemCollection.get()

        itemCollectionQuery.then((querySnapshot) => {
            setList(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        })
        .catch((e) => {console.log(e)})
        
    },[category])
    
    
    return(
        <section>
            <ItemList list={list} />
        </section>
        
    )
}

export default ItemListContainer;