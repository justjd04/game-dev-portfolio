import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {ProductContext} from "../context"


function Product({title, id, img, icon, link}) {
    const { handleDetail } = useContext(ProductContext);
    return (
        <ProductWrapper className='col-8 mx-auto col-md-6 col-lg-3 my-3'>
        <div className="card">
            <div className="img-container p-2" onClick={()=>{handleDetail(id)}}>
                
                <a href={link} target="_blank">
                    <img src={img} alt='games' className="card-img-top img-fluid"/>
                </a>

                <a href={link} target="_blank" className="iconbtn">
                    <img src={icon} alt="game icon" width="70" height="70" class="game-icon"/>
                    </a>

                <a href={link} target="_blank" className="cart-btn">
                    <img src="img/googleplay.png" alt="Google Play" width="120" height="50"/>
                    </a>
            
                   
            </div>
            <div className="card-footer d-flex justify-content-center">
                <p className="game-name align-self-center mb-0">
                    {title}
                </p>
            </div>
        </div>
        </ProductWrapper>
    )
}



const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 1s linear;
    overflow: hidden;
}
.card-footer{
    background:transparent;
    border-top: transparent;
    transition: all 1s linear;
}
&:hover{
    
    p {
        color: #ff00ff;
        font-weight: bold;

    }
}
.img-container{
    position:relative;
    overflow:hidden;
    border-radius: 30px;
    
}
.card-img-top{
transition: all 1s linear;
border-radius: 30px;

}
.img-container:hover .card-img-top{
    transform:scale(1.1);
}

.game-icon {
    border-radius: 20px;
    border: 3px solid #2f97ff;
}

.iconbtn {
    position: absolute;
    top: 25%;
    left:50%;
    transform: translate(-50%, -50%);
    border:none;
    transition: all 1s linear;
    opacity: 0;
}

.img-container:hover .iconbtn{
    opacity: 1;
}

.cart-btn{
    position: absolute;
    bottom: -25%;
    left:50%;
    transform: translate(-50%, -50%);
    border:none;
    opacity: 0;
    transition: all 1s linear;
}
.img-container:hover .cart-btn{
    bottom: 0;
    opacity: 1;
}
.cart-btn:hover {
    cursor:pointer;
}
.cart-btn:focus{
   outline: none;
}


`;
export default Product