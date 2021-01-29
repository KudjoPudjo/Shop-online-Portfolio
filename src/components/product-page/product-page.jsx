import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import { getProductInf, getProductPic } from "../../redux/selectors/selectors"
import "./product-page.css"
import { add_to_card } from "../../redux/actions_creators/actions_creators";

function ProductPage({ match }) {
    const dispatch = useDispatch()
    const [mainPic, setMainPic] = useState([])
    const [size, setSize] = useState();
    


    const id = match.params.id
    const productInf = useSelector((state) => getProductInf(state, +id));
    const picArr = useSelector((state) => getProductPic(state, productInf.type));

    useEffect(() => {
        setMainPic(picArr.picArr)
    }, [])


    function mainPicFunc(e) {
        let arr = mainPic.concat()
        let id = e.target.closest("div").id
        let elem = arr.splice(id, 1)
        arr.unshift(elem)
        setMainPic(arr)
    }


    function picSize(e) {
        if (e.target === size) return
        if (size) size.classList.remove("active")
        e.target.closest(".size-bar").classList.add("active")
        setSize(e.target.closest(".size-bar"))
    }


    function addToCard() {
        if (!size) return
        let prod = {
            size: +size.firstChild.innerHTML,
            type: productInf.type,
            sex: productInf.sex,
            price: productInf.price,
            name: productInf.name,
            img:picArr.picArr[0],
            count:1,
            id:productInf.id
        }
        dispatch(add_to_card(prod))
    }

    
    return (
        <div className="product-page-bar centred">
            <div className="product-page-wrp">
                <div className="product-imgae-bar">
                    {mainPic.map((item, i) => (
                        i === 0 ? <div onClick={mainPicFunc} key={i} id={i} className="main-pic-wrp centred"><img className="main-pic" src={item} alt="Product"></img></div> :
                            <div onClick={mainPicFunc} id={i} key={i} className="product-img-wrp centred"><img className="product-img" src={item} alt="Product"></img></div>
                    )
                    )}
                </div>
                <div className="product-side-bar">
                    <div className="product-side-wrp">
                        <h2 className="product-side-wrp">{productInf.name}</h2>
                        <h3 className="product-side-sex">Пол: {productInf.sex}</h3>
                        <p className="product-side-price">Цена: {productInf.price}₽</p>
                        <h3 className="product-side-size">Доступные размеры:</h3>
                        <div className="size-cart">
                            <div className="size-wrp">
                                {productInf.size.map((size, i) => <div key={i} onClick={picSize} className="size-bar centred"><span className="size-item">{size}</span></div>)}
                            </div>
                            <Button onClick={addToCard} variant="contained" color="default" disableElevation>
                                Добавить в карзину 🛒
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="product-discription-bar centred">
                    <div className="product-discription-wrp">
                        <p className="product-discription">{picArr.discription}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage