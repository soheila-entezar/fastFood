import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./FastFoodItem.css";

export default function FastFoodItem({ name, price, ingredients, imageUrl,delay }) {
 
  return (
    <div className="card product-card h-100 border-0 shadow-sm pb-1 fade-in-horiz" style={{animationDelay:delay+'s'}}>
      <span className="badge badge-end badge-shadow  bg-success fs-md fw-medium">
        قیمت:{price.toLocaleString()}تومان
      </span>
      <div className="card__placeholder">
        <img className="card-image-top" style={{height:'280px', width:"100%"}} src={imageUrl} />
      </div>
      <div className="card-body text-center pt-3 pb-4 d-flex flex-column">
        <h5 className="mb-2">{name}</h5>
        <div className="fs-ms fw-bold text-muted mb-3">{ingredients}</div>
        <button className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold">
          <MdOutlineShoppingCart className="fs-5 ms-3" />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}
