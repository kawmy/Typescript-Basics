interface IAccount{
    name: string,
    balance: number,
    status?:string,
    deposit?:()=>void,
};

const myAccount4 : IAccount ={
    name: 'John',
    balance: 1000,
    deposit: function(){
        console.log('Deposit');
    },
    status: 'active',
};


const myAccount5 : IAccount={
    name: 'John',
    balance: 1000,
};

let accounts2 :IAccount[];
