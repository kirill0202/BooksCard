import React from 'react';
import Header from '../../components/Header/Header';
import { useSelector } from 'react-redux';


const HeaderContainer = () => {
    const cartData = useSelector(({cartReducer}) => ({
        totalPrice: cartReducer.cart,
        countBooks: cartReducer.cart.length
    }));
    return <Header {...cartData}/>
}
export default HeaderContainer;