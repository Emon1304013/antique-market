import React from "react";
import { Link } from "react-router-dom";

const WishedItemCard = ({product}) => {
    const {_id,productName,img,userEmail,price,productId} = product;
  return (
    <div>
      <div className="card w-96 shadow-xl">
        <figure>
          <img src={img} alt={productName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <p>Price: BDT<span>{price}</span></p>
          <div className="card-actions justify-end">
            <Link to={`/dashboard/payment/${productId}`}><button className="btn btn-primary">Pay</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishedItemCard;
