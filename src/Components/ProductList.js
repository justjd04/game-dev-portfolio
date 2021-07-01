import React, { useContext } from 'react'
import Product from "./Product"
import './ProductList.css';
import Title from './Title'
import { ProductContext} from "../context"
import Header from "./Header";
//import Explore from "./Explore";
//import Footer from "./Footer";
function ProductList() {
    const {products} = useContext(ProductContext);
    return (
        <React.Fragment>
        <Header/>
            <div className="game-page py-5">
                <div className="container-fluid" id="games">
                    <Title name='PLAY' title='NOW' />
                    <div className="row">
                        {products.map(item => (
                            <Product
                                id={item.id}
                                title={item.title}
                                img={item.img}
                                icon={item.icon}
                                link={item.link}
                                inCart={item.inCart}
                                price={item.price}
                                key={item.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
           
           
        </React.Fragment>

    )
}

export default ProductList