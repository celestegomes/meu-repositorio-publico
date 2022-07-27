class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo () {
        return this._saldo;
    }
    set saldo (valor){
        this._saldo = valor;
    }
    sacar (valor){
        if (this._saldo <= valor){
            return console.log('Saldo insuficiente.');
        }
        this._saldo = this._saldo - valor;
        return this._saldo
    }
    depositar (valor){
        this._saldo = this._saldo + valor;
        return this._saldo
    }
    class ContaOutra extends ContaBancaria{
            constructor(agencia, numero, cartaoCredito) {
            super(agencia, numero);
            this.tipo = 'corrente';
            this._cartaoCredito = cartaoCredito;
        }

        get cartaoCredito(){
            return this._cartaoCredito;
        }
        set cartaoCredito(valor){
            this._cartaoCredito = valor;
        }
    }
    class ContaPoupanca extends ContaBancaria{
        constructor(agencia, numero){
            super(agencia, numero);
            this.tipo = 'poupança';
            this._saldo = 0;
        }
    }
    class ContaUniversitaria extends ContaBancaria{
        constructor(agencia, numero){
            super(agencia, numero);
            this.tipo = 'universitaria';
            this._saldo = 0;
        }
        sacar (valor){
            let novoSaldo;
            if (valor > 500){
                return console.log ('Faça um saque menor.');
            } 
            return this._saldo = this._saldo - valor;
            
        }
    }    
}
