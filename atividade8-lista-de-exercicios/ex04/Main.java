public class Main {
  public static void main(String[] args) {
    Funcionario gerente = new Gerente("Marcos", 17000);
    Funcionario desenvolvedor = new Desenvolvedor("Marlon", 10000);

    gerente.exibirInformacoes();
    gerente.trabalhar();
    System.out.println("------------");
    desenvolvedor.exibirInformacoes();
    desenvolvedor.trabalhar();
    System.out.println("------------");   
  }
}










