public abstract class Funcionario {
  protected String nome;
  protected double salario;

  public Funcionario(String nome, double salario){
    this.nome = nome;
    this.salario = salario;
  }

  public abstract double calcularBonus();

  public void exibirInformacoes(){
    System.out.println("Nome: " + nome + ", salário: " + salario);
  }
}