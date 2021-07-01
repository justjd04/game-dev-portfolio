import React, {useState, createContext, useEffect}from 'react'
import { storeProducts, detailProduct} from './data';

export const ProductContext = createContext();
//Provider
//Consumer = useContext()

export function ProductProvider(props) {  
    let [products, setProducts] = useState([]);
    const [details, setDetails] = useState(detailProduct)
    const [cart, setCart] = useState([])
    const [modalProduct, setModalProduct] = useState(detailProduct)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [cartSubtotal, setCartSubtotal] = useState(0)
    const [cartTax, setCartTax] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);


   const copyProducts = () => {
        storeProducts.forEach( product => {
           const singleProduct = {...product};
             products = [...products, singleProduct]
        })
        return setProducts(products);
    }


    const getItem = id => products.find(item => item.id === id);

    const handleDetail = (id) => {
        const match = getItem(id)
        setDetails(match);
    }

    const addToCart = (id) => {
        // create a copy of the products 
        const tempProducts = [...products];
        //get index of the item needed to add to cart
        const index = tempProducts.indexOf(getItem(id));
        const product = tempProducts[index];
        const price = product.price;
        if (product.incart === true){
            increment(id);
        } else {product.incart = true;
                product.count = 1;
                product.total = price;
                //set state with updated items
                setProducts(tempProducts);
                //update cart with item added
                setCart([...cart, product]);
                addTotals();
        }
    }


    useEffect(() => {
        copyProducts();
    // eslint-disable-next-line 
    }, [])

    useEffect(() => {
        addTotals();
    // eslint-disable-next-line 
    }, [addToCart])



    const increment = (id) => {
        
        let tempCart = [...cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
       const fire = () => {
            setCart([...tempCart]);
            addTotals();
        }
        fire();
    }
    const decrement = (id,e) => {
       
        let tempCart = [...cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        console.log("before function", product.count);
        if(product.count === 0){
            removeItem(id);
        } else { 
        product.total = product.count * product.price;
            setCart([...tempCart]);
            addTotals();
        }   
    }
    const removeItem = (id) => {
    //make shallow copy of products
       let tempProducts = [...products];
       //make shallow copy of items in cart
       let tempCart = [...cart];
       //filter out cart items not to be removed
       tempCart = tempCart.filter(item => item.id !== id);
       //get index of removed item from copied array of products
       const index = tempProducts.indexOf(getItem(id));
       //removed product is the product in the copied array of products
       //with the same index retreived
       let removedProduct = tempProducts[index];
        //set the in cart property to be false
       removedProduct.incart = false;
       //set the cart count of the removed product to be 0
       removedProduct.count = 0;
       //set the total to be 0
       removedProduct.total = 0;
       //set state of cart to reflect changes
       setCart([...tempCart]);
       //set state of products to reflect item removed propery changes
       setProducts([...tempProducts]);
       //sum new totals
       addTotals();
    }

    const clearCart = () => {
        setProducts(storeProducts);
        setCart([])
        addTotals()
    }

    const addTotals = () => {
        let subTotal = 0;
        cart.map(item => subTotal += item.total)
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        setCartSubtotal(subTotal);
        setCartTax(tax);
        setCartTotal(total);
    }

  const openModal = id => {
      //get item that will be displayed on modal
      const product = getItem(id)
      setModalProduct(product)
      //open modal
      setIsModalOpen(true)
  }  

  const closeModal = id => {
    setIsModalOpen(false)
  }
    
    return (
        <ProductContext.Provider value={{
            products:products, 
            details:details,
            handleDetail:handleDetail, 
            addToCart:addToCart, 
            openModal:openModal, 
            closeModal:closeModal, 
            modalProduct:modalProduct, 
            isModalOpen:isModalOpen,
            cart:cart,
            increment: increment,
            decrement:decrement,
            removeItem:removeItem,
            clearCart:clearCart,
            cartSubtotal: cartSubtotal,
            cartTax:cartTax,
            cartTotal:cartTotal
            }}>
            {props.children}
        </ProductContext.Provider>
    )
}
