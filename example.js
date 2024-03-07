function addCosts(price, shipping) {
    return price + shipping;
}
;
function addCosts1(price, shipping) {
    if (price + shipping < 20) {
        return false;
    }
    else {
        return price + shipping;
    }
}
;
addCosts(10, 5);
