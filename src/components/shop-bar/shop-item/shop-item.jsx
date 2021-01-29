import React from 'react';
import "./shop-item.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProductPic } from '../../../redux/selectors/selectors';

function ShopItem({ item }) {
    const picArr = useSelector((state)=>getProductPic(state,item.type))    
    return (
        <div className="shop-item centred">
            <div className="shop-item-wrp">
                <p className="shop-item-sex">{item.sex}</p>                
                {<img className="shop-item-img" src={picArr.picArr[0]} alt={`Кросовки ${item.name}`}></img>}
                <div className="shop-item-tex-bar">
                    <Link className="route-lnk" to={`/product/${item.id}`}>
                        <p className="shop-item-txt">{item.name}</p>
                    </Link>
                    <p className="shop-item-txt">{item.price} ₽</p>
                </div>
            </div>
        </div>
    )
}


export default ShopItem