import React, {useContext} from 'react'
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartTotals from "./CartTotals"
import {ProductContext} from "../../context"
import CartList from "./CartList"
function Cart() {
    const value = useContext(ProductContext);

    return (
            <div>
            {value.cart.length === 0 ? <EmptyCart/> : 
             <React.Fragment>
             <CartColumns/>
             <CartList value={value}
             />
             <CartTotals value={value}/>
             </React.Fragment>
             }
            </div>
    )
}

export default Cart