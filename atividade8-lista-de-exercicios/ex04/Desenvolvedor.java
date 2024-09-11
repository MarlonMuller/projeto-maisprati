class Desenvolvedor extends Funcionario{
  public Desenvolvedor(String nome, double salario){
    super(nome, salario);
  }

  @Override
  public double calcularBonus(){
    return salario * 0.10;
  }

  public void trabalhar(){
    System.out.println("Estou trabalhando, codando.");
  }
}