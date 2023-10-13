import React from 'react'
import {  FaStar,FaBabyCarriage } from "react-icons/fa";


const Card = ({img,title,star,reviews,prevPrice,newPrice}) => {
  return (
    <section className="card">
          <img
            src={img}
            alt={title} className="card-img"
          />
          <div className="card-detail">
            <h3 className="title">{title}</h3>

            <section className="card-review">
            {star} {star} {star}

              <span className="total-review">{reviews}</span>
            </section>

            <section className="card-price">
              <div className="price">
                <del>{prevPrice}</del> {" "}{newPrice}
              </div>
              <div className="bag">
                <FaBabyCarriage className="bag-icon"/>
              </div>
            </section>

          </div>
        </section>
  )
}

export default Card