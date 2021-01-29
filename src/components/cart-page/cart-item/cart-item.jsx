import React from "react";
import { useDispatch } from "react-redux";
import { add_quality, remove_from_cart } from "../../../redux/actions_creators/actions_creators";
import "./cart-item.css";


function CartItem({ item }) {
    const dispatcher = useDispatch();


    function changeCount(e) {        
        if (!e.target.value === 0) return;
        dispatcher(add_quality({
            ...item,
            count: e.target.value
        }))
    }
    function deleteFromCart (){
        dispatcher(remove_from_cart(item.id))
    }

    return (
        <div className="cart-item-bar centred">
            <div className="cart-item">
                <h3 className="cart-item-name">{item.name}</h3>
                <div className="cart-item-wrp">
                    <div className="cart-item-pic">
                        <img className="cart-pic" src={item.img} alt="Товар" />
                    </div>
                    <div className="cart-item-info">
                        <div className="cart-item-disc">
                            <p className="cart-disc">Размер: {item.size}</p>
                            <div className="cart-inp-wrp">
                                <span>Колличество: </span>
                                <input min="1" onChange={changeCount} className="item-count" type="number" value={item.count} />
                            </div>
                        </div>
                        <div className="cart-item-price">
                            <h3 className="cart-disc">Цена: {item.price * item.count}₽</h3>
                        </div>
                    </div>
                </div>
            </div>
            <span onClick={deleteFromCart} className="delete-from-cart">❌</span>
        </div>
    )
}

export default CartItem;