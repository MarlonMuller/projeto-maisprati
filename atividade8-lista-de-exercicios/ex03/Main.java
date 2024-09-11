public class Main {
  public static void main(String[] args) {

  Funcionario gerente = new Gerente("Gustavo", 10000);

  Funcionario desenvolvedor = new Desenvolvedor("Marlon", 8000);

  gerente.exibirInformacoes();
  System.out.println("Bônus do gerente: " + gerente.calcularBonus());
    System.out.println("---------------");
    desenvolvedor.exibirInformacoes();
    System.out.println("Bônus do desenvolvedor: " + desenvolvedor.calcularBonus());
    

  }


}