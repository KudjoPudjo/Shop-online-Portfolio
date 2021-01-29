import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../loader/Loader";
import "./shop-bar.css"
import ShopItem from "./shop-item/shop-item";
import ControlledOpenSelect from "./slector/selector";



function ShopBar({ selector }) {
    const [state, setState] = useState(useSelector(selector));
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>setLoading(!loading),2000)
    },[])

    function sort(sort_type) {        
        if (sort_type === "priceUp") {
            let arr = state.concat([]);
            setState(arr.sort((a, b) => a.price - b.price))
        } else if (sort_type === "priceDown") {
            let arr = state.concat([]);
            setState(arr.sort((a, b) => a.price - b.price).reverse())
        }
    }

    return (
        <div className="shop-bar centred ">
            {loading?<Loader></Loader>:<div className="wrap centred">
                <div className="shop-sort">
                    <ControlledOpenSelect sort={sort} ></ControlledOpenSelect>
                </div>
                <div className="shop-bar-wrp">
                    {state.map((item, i) => (<ShopItem key={i} item={item}></ShopItem>))}
                </div>
            </div>}
        </div>
    )
}


export default ShopBar;