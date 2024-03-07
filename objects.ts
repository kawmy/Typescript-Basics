const myAccount={
    name: 'John',
    balance: 1000,
};

let myAccount1:{
    name:string,
    balance:number,
    isActive:boolean,
}={
    name: 'John',
    balance: 1000,
    isActive:true,
};

myAccount1={
    name: 'John',
    balance: 2300,
    isActive:true,
};


let myAccount2:{
    name: string,
    balance: number,
    status?:string
}={
    name: 'Hey',
    balance: 2300,
}

myAccount2={
    name: 'John',
    balance: 2300,
    status:'active'
}


let accounts:{
    name: string,
    balance: number,
    status?:string
}[];