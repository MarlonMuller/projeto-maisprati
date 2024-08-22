package inheritanceActivity;

public class Funcionario {

    public String nome;
    public String CPF;
    public int matricula;

    public Funcionario(String nome, String CPF, int matricula) {
        this.nome = nome;
        this.CPF = CPF;
        this.matricula = matricula;
    }

    void trabalhar(){
        System.out.println("Estou trabalhando...");
    }

}


//Funcionario - Duas subclasses uma gerente e uma desenvolvedor.
//criem uma classe empresa calcular a folha de pagamento dos funcionários.