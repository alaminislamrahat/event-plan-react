const getStoredCarts = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        return JSON.parse(storedCart);
    }
    return [];
}

const setStoredCarts = (id) => {
    const storedCarts = getStoredCarts();
    const exists = storedCarts.find(storedcartId => storedcartId === id);
    if (!exists) {
        storedCarts.push(id);
        localStorage.setItem('cart', JSON.stringify(storedCarts));
    }
}

const removeCart = (id) => {
    const carts = getStoredCarts();
   
    const ind = carts.indexOf(id);
   
    if (ind > -1 && ind < carts.length) {
        carts.splice(ind, 1);
    }
    
    localStorage.setItem('cart', JSON.stringify(carts));
   
    console.log(carts)
}


export { setStoredCarts, getStoredCarts, removeCart }