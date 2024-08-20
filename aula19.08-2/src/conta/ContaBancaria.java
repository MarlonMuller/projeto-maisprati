package conta;

public class ContaBancaria {

    int saldo ;
    int receita;
    int despesa;
    String idConta;

    public ContaBancaria(String idConta) {
        this.idConta = idConta;
        this.saldo = 0;
    }

    public int getSaldo() {
        return saldo;
    }

    public String getIdConta() {
        return idConta;
    }

    public void setIdConta(String idConta) {
        this.idConta = idConta;
    }

    public void setSaldo(int saldo) {
        this.saldo = saldo;
    }

    public void depositar(int valor, String idContaDestino){
        if(this.idConta.equals(idContaDestino)){
            saldo += valor;
        }



    }

    public void sacar (int valor, String idContaDestino){
        if (this.idConta.equals(idContaDestino)) {
            if (saldo >= valor) {
                saldo -= valor;
            }
        }
    }

    public int transferir (int valor){
        return valor;
    }

    public void extrato (){

    }




}
