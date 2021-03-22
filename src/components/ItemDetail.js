const ItemDetail = ({product, getItem}) => {
    return (
        <div className="collapse" id={'prodDescription' + product.id}>
            <div className="card card-body">
                {getItem()}
            </div>
        </div>
    );
}

export default ItemDetail;