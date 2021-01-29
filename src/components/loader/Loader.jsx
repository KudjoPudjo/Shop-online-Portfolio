import React from "react";
import "./loader.css"


function Loader() {
    return (
        <div className="Loader-wrp centred w">
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <h2 className="loader-txt">Загружаем товары, подождите!</h2>
        </div>
    )
}


export default Loader
