import { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({product}) => {
    const [itemDetail, setItemDetail] = useState(null);

    const getItem = () => {
        new Promise ((resolve,reject) => {
            setTimeout(() => {
                resolve(product.description)
            }, 2000);
        }).then(resolve => setItemDetail(resolve));

        return itemDetail;
    }

    return (
        <ItemDetail product={product} getItem={getItem}/>
    );
}

export default ItemDetailContainer;