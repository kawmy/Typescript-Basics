interface IAccount2 {
    name: string,
    balance: number,
    status?: string,
    deposit?: () => void,
};


class InvestmentAccount0 {
    name;
    balance;
    withdraw() {
    }
}

class InvestmentAccount1 {
    constructor(public name, public balance) {
    }

    private withdraw() {
    }
}


class InvestmentAccount2 implements IAccount2 {
    name;
    balance;

    withdraw() {

    }
}

class InvestmentAccount3 implements IAccount2 {
    public name;
    public balance;

    private withdraw() {

    }
}


class InvestmentAccount4 implements IAccount2 {
    constructor(
        public name, public balance
    ) {

    }

    private withdraw() {
        this.balance = 0;
    }
}
