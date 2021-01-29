import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCartState } from "../../redux/selectors/selectors";
import CartItem from "./cart-item/cart-item";
import Button from '@material-ui/core/Button';
import "./Cart-page.css"


function CartPage() {
    const cartState = useSelector(getCartState)
    const [totalPrice, setTotalPrice] = useState()
    useEffect(() => {
        let summ = 0;
        cartState.forEach(element => {
            summ += element.price * element.count
        });
        setTotalPrice(summ)
    })
    return (
        <div className="cart-page-bar centred">
            {cartState.length ? <div className="cart-page-wrp">
                <div className="cart-wrp">
                    <div className="item-bar">
                        {cartState.map((item, i) => <CartItem key={i} item={item}></CartItem>)}
                    </div>
                    <div className="centred wrp">
                        <h3 className="total-price">Итоговая цена: {totalPrice}₽</h3>
                        <Button variant="contained" color="secondary" disableElevation>
                            $ Оплатить $
                        </Button>
                    </div>
                </div>
            </div> : <div className="cart-page-empty"><h1>Карзина пуста милорд!</h1></div>}

        </div>
    )
}

export default CartPage;