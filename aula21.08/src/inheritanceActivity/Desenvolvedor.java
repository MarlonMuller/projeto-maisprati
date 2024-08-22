package inheritanceActivity;

public class Desenvolvedor extends Funcionario {

    public Desenvolvedor(){
        super("Marlon", "12345678", 12345);
    }

    void codar(){
        System.out.println("Estou codando...");
    }

    public static void main(String[] args) {
        Desenvolvedor desenvolvedor1 = new Desenvolvedor();
        desenvolvedor1.trabalhar();
        desenvolvedor1.codar();
    }

}

