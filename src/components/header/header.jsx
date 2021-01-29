import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"
import Filter from './Filter/filter'
import "./header.css"
import { getCartState } from '../../redux/selectors/selectors';

function Header() {
    const [mensFilter, setMensFilter] = useState(false);
    const [girlsFilter, setGirlsFilter] = useState(false);
    
    const cartState = useSelector(getCartState)
   
    function removeFilter(e) {        
        setGirlsFilter(false)
        setMensFilter(false)       
    }




    return (
        <div className="header centred">
            <div className="header-wrp">
                <div className="header-logo">
                    <div className="d centred">
                        <Link to="/" className="route-lnk">
                            <span className="name-ste">Loruense</span>
                        </Link>
                    </div>
                    <div className="pink-logo abs-logo"></div>
                    <div className="gray-logo abs-logo"></div>
                </div>
                <div className="nav-bar">
                    <div className="nav-wrp">
                        <ul className="nav-list">
                            <h2 className="nav-item" onMouseEnter={() => { setMensFilter(true); setGirlsFilter(false) }} >Мужское</h2>
                            <h2 className="nav-item" onMouseEnter={() => { setGirlsFilter(true); setMensFilter(false) }}>Женское</h2>
                        </ul>
                    </div>
                    <div className="nav-cart">
                        <Link className="nav-lnk-wrp" to="/cart">
                            {cartState.length?<div className="cart-count centred">
                                <span className="count">{cartState.length}</span>
                            </div>:null}
                            <svg x="0px" y="0px" viewBox="0 0 456.272 456.272" className="nav-cart-icon">
                                <path d="M441.272,184.656h-88.349L288.61,29.703c-3.176-7.651-11.955-11.277-19.604-8.104c-7.651,3.176-11.28,11.953-8.104,19.604  l59.54,143.453H135.831l59.54-143.453c3.176-7.651-0.453-16.429-8.104-19.604c-7.648-3.175-16.429,0.453-19.604,8.104  L103.35,184.656H15c-8.284,0-15,6.716-15,15s6.716,15,15,15h9.02l29.408,160.833c6.393,34.96,36.828,60.334,72.367,60.334h204.684  c35.54,0,65.974-25.374,72.366-60.334l29.408-160.833h9.02c8.284,0,15-6.716,15-15S449.556,184.656,441.272,184.656z   M373.333,370.092c-3.786,20.704-21.809,35.73-42.855,35.73H125.794c-21.046,0-39.07-15.026-42.856-35.73L54.646,215.365h346.979  L373.333,370.092z" />
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                            </svg>
                        </Link>
                        <Link className="route-lnk" to="/cart">
                            <h3 className="nav-cart-t">Корзина</h3>
                        </Link>
                    </div>
                </div>
            </div>
            {mensFilter ? <Filter removeFilter={removeFilter} sex="male"></Filter> : null}
            {girlsFilter ? <Filter removeFilter={removeFilter} sex="female"></Filter> : null}
        </div >
    )
}


export default Header