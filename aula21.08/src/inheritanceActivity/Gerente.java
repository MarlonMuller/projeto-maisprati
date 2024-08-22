package inheritanceActivity;

public class Gerente extends Funcionario {

    public Gerente(){
        super("Fulano","987654321", 54321);
    }

    void gerenciar(){
        System.out.println("Estou gerenciando...");
    }

    public static void main(String[] args) {
        Gerente gerente1 = new Gerente();
        gerente1.trabalhar();
        gerente1.gerenciar();
    }

}
