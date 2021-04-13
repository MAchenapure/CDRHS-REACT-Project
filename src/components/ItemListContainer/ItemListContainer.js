import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemList from '../ItemList/ItemList'
import {getFirestore} from '../../config/Firebase'

const ItemListContainer = ({product}) => {
    const [item, setItem] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const db = getFirestore(); 
        const allProds = db.collection("Products");
        const catProds = allProds.where("category", "==", `${categoryId}`);
    
        catProds.get().then(res => {
            if (res.size > 0){
                setItem(res.docs.map(x => {
                    let aux = {id: x.id, ...x.data()};
                    return aux;
                }));
            }
        }).catch( error => console.log("Error con el get a Firebase: " + error));
    }, [categoryId]);
    
    // useEffect(() => {
    //     if (categoryId) {
    //         let aux = product.filter(array => array.category === categoryId);
    //         setItem(aux);
    // }}, [categoryId])

    return (
        <div>
            {
                categoryId===undefined
                ? <ItemList product={product}/>
                : <ItemList product={item}/>
            }
        </div>
    );
};

export default ItemListContainer;   