import React, { useContext } from 'react'
import {ButtonContainer} from "./Button"
import {ProductContext} from "../context"
import { Link } from "react-router-dom";



function Details() {
    const { details, openModal, addToCart} = useContext(ProductContext);
    const {id, title, img, price, company, info } = details;
    return (
            <div className="container py-5">
                {/*Title*/}
                <div className="row">
                </div>
                {/*End of Title*/}
                {/*Product Info*/}
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <img src={img} alt="product" className="img-fluid"/>
                    </div>
                    {/*Product Text*/}
                <div className="col-10 mx-auto col-md-6 my-3">
                    <p className="details-title">{title}</p>
                    <h4 className="text-details text-capitalize text-muted mt-3 mb-2">
                        made by: <span className="text-capitalize">{company}</span>
                    </h4>
                    <p className="details-price">
                            price: <span>$</span>
                            {price}
                    </p>
                    <h1 className="details-info-head mt-3 mb-0">
                        some info about product:
                    </h1>
                    <p className="text-muted details-info">{info}</p>
                    <div>
                        <Link to="/">
                            <ButtonContainer>
                                BACK TO PRODUCTS
                            </ButtonContainer>
                        </Link>
                        <ButtonContainer onClick={() => { addToCart(id); openModal(id); }}>
                            ADD TO CART
                        </ButtonContainer>
                    </div>
                    {/*buttons*/}
                </div>

            </div>
        </div>
    )
}

export default Details