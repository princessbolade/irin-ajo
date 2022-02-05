import React from 'react'
import {Link} from 'react-router-dom'

function CardItem(props) {
    return (
        <>
        <li className="cards__items">
           <Link className="cards__items__links" to={props.path}>
               <figure className="cards__items__pic-wrap" data-category={props.label}>
                   <img src={props.src} alt="" className="cards__item__img"  />
               </figure>
               <div className="cards__items__info">
                   <h5 className="cards__items__text">
                     {props.text}
                   </h5>
               </div>
           </Link>
        </li>
        </>
    )
}

export default CardItem
