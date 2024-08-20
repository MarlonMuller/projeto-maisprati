package abstraction;

public class ContaBancaria {

    int saldo ;
    int receita;
    int despesa;


    public void depositar(int valor){
        saldo += valor;
    }

    public int sacar (int valor){
        return valor;
    }

    public int transferir (int valor){
        return valor;
    }

    public void transferir (){

    }




}
