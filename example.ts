function addCosts (price:number,shipping:number) : number{
    return price+shipping;
};

function addCosts1 (price:number,shipping:number) : number | boolean{
    if(price+shipping<20){
        return false;
    }else{
        return price+shipping;
    }
};

addCosts(10,5);