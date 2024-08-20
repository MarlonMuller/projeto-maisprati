import conta.ContaBancaria;

public class Main {
    public static void main(String[] args) {
        ContaBancaria minhaConta = new ContaBancaria("12345");

        System.out.println("Meu saldo inicial: " + minhaConta.getSaldo());

        minhaConta.depositar(5, "12345");
        minhaConta.depositar(15, "12345");
        System.out.println("Meu saldo após transferir 20 reais: " + minhaConta.getSaldo() + " reais.");

        minhaConta.sacar(7, "12345");
        System.out.println("Meu saldo após sacar 7 reais: " + minhaConta.getSaldo() + " reais.");
    }
}