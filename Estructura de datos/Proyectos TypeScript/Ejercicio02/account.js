

class Account{
    //Publicc
    Movements
    Locate
    Locate = navigator.language;
    //Private
    #_Pin

    constructor(owner, currency, pin){
        this.Ownner = owner
        this.Currency = currency
        this.#_Pin= pin
        this.Movements = new Array()
        console.log('Gracias por abrir una cuenta, ' + this.Ownner);
    }
    Deposit(depositMount){
        this.Movements.push(depositMount)
        console.log(`Safely deposited ${depositMount}`);
    }
    Withdraw(withdrawMount){
        this.Movements.push(-withdrawMount)
        console.log(`Safely withrawed ${withdrawMount}`);
    }
    ToString(){
        return `El dueno es ${this.Ownner}, con la moneda ${this.Currency}`
    }
}

const acc1 = new Account('Mendez', 'Mex Pesos', 3366);

console.log(acc1.ToString());

// acc1.Movements.push(500)
// acc1.Movements.push(500)
// acc1.Movements.push(-350)

acc1.Deposit(350)
acc1.Deposit(1000)
acc1.Withdraw(25)

console.log('Despues de movimientos: ');
console.log(acc1.Movements);


