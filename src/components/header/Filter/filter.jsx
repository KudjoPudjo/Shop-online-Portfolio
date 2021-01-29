import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import "./filter.css";


function Filter({ sex, removeFilter }) {
    const [urlPicture, setUrlPicture] = useState("https://obliqo.ru/wp-content/uploads/2018/02/konstruktivizm.jpg");
    
    let urls = {
        mens: {
            sneakers: 'https://images.ru.prom.st/660774146_w640_h640_muzhskie-krossovki-adidas.jpg',
            jakets: 'https://static.topsecret.pl/ru/public/foto/full/SKU0832GR_1.jpg',
            pants: 'https://www.medicinewear.com.ua/uploads/slider/34039.jpg',
            clothets: 'https://marazmota.ru/wp-content/uploads/2019/07/mockup-9af19bd2.jpg'
        },
        girls: {
            sneakers: 'https://borvedomosti.ru/images/wss/articles/2020/03/4495-modnye-zhenskie-krossovki-glavnye-trendy-2020-goda.jpg',
            jakets: 'https://room78.net/wp-content/uploads/2019/08/img-20190814-wa0009.jpg',
            pants: 'https://cdn.sela.ru/wa-data/public/shop/products/55/89/108955/images/95600/95600.2250x3000.jpg',
            clothets: 'https://www.aliexpert.club/wp-content/uploads/2020/02/zhenskle-svltery-s-kapyushonom-l-nadplsyu-velvetovye-pulovery-s-dllnnym-rukavom-l-nadplsyu-OH-YES-svetlo-700x700.jpg'
        }
    }
    
    

    return (
        <div onMouseLeave={removeFilter} className="filter-bar ">
            <div className="filter-wrp centred ">
                <div className="photo-bar centred">
                    <div className="photo-wrp">
                        <img className="photo" src={urlPicture} alt="clothets" />
                    </div>
                </div>
                <div className="filter-nav-wrp centred">
                    <div className="filter-nav">
                        <nav className="filter-nav-list">
                            <Link onMouseOver={()=>setUrlPicture(sex === "male"?urls.mens.clothets:urls.girls.clothets)} className="route-lnk" to={sex === "male" ? "/mens/clothets" : "/girls/clothets"}><span  className="filter-nav-item">Одежда</span></Link>
                            <Link onMouseOver={()=>setUrlPicture(sex === "male"?urls.mens.sneakers:urls.girls.sneakers)} className="route-lnk" to={sex === "male" ? "/mens/sneakers" : "/girls/sneakers"}><span  className="filter-nav-item">Кросовки</span></Link>
                            <Link onMouseOver={()=>setUrlPicture(sex === "male"?urls.mens.jakets:urls.girls.jakets)} className="route-lnk" to={sex === "male" ? "/mens/jackets" : "/girls/jackets"}><span  className="filter-nav-item">Куртки</span></Link>
                            <Link onMouseOver={()=>setUrlPicture(sex === "male"?urls.mens.pants:urls.girls.pants)} className="route-lnk" to={sex === "male" ? "/mens/pants" : "/girls/pants"}><span  className="filter-nav-item">Брюки</span></Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Filter