import React, {useContext} from 'react';
import styled from "styled-components";
import {ProductContext} from "../context";
import {Link} from "react-router-dom"
import { ButtonContainer } from './Button';

function Modal() {
    const { closeModal, modalProduct, isModalOpen} = useContext(ProductContext);
    const {img, title, price} = modalProduct;

    return (
        <div>
           { !isModalOpen ? 
           
           null :
           
           <ModalContainer onClick={() =>closeModal()}>
            <div className="container">
                <div className="row">
                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                    <h5>Item added to the Cart!</h5>
                    <img src={img} alt={title} className="img-fluid"/>
                    <h5>{title}</h5>
                    <h5 className="text-muted">
                        price: $ {price}
                    </h5>
                    <Link to="/">
                    <ButtonContainer onClick={()=>closeModal()}>
                        Continue Shopping
                    </ButtonContainer>
                    </Link>
                    <Link to="/cart">
                        <ButtonContainer cart onClick={ () => closeModal()}>
                            Go To Cart
                        </ButtonContainer>
                    </Link>
                    </div>
                </div>
            </div>

           </ModalContainer> }

        </div>
    )
}
const ModalContainer = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom: 0;
background: rgba(0,0,0,0.3);
align-items:center;
justify-content: center;
#modal{
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
`;
export default Modal