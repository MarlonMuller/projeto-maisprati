abstract class Funcionario {
  protected String nome;
  protected double salario;

  public Funcionario(String nome, double salario){
    this.nome = nome;
    this.salario = salario;
  }

  abstract public double calcularBonus();

  public void exibirInformacoes(){
    System.out.println("Nome: " + nome);
    System.out.println("Salário: " + salario);
    System.out.println("Bônus: " + calcularBonus());
    
  }

  public void trabalhar(){
    System.out.println("Estou trabalhando...");
  }
}