const Item = ({product}) => {
    return(
        <>
        <div className="card item-card" style={{width: 18 + 'rem'}}>
            <img src={product.pictureUrl} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <a class="btn" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                    </svg>
                </a>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        Info del producto
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Item;