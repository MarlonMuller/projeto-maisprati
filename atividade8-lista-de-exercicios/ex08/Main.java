public class Main {
  public static void main(String[] args) {

    SistemaRH sistemaRH = new SistemaRH();
    FolhaPagamento folha = sistemaRH.getFolhaPagamento();

    Funcionario gerente = new Gerente("Alice", 5000);
    Funcionario desenvolvedor = new Desenvolvedor("Bob", 4000);
    Funcionario estagiario = new Estagiario("Carol", 2000);

    folha.adicionarFuncionario(gerente);
    folha.adicionarFuncionario(desenvolvedor);
    folha.adicionarFuncionario(estagiario);

    double totalFolha = folha.calcularFolhaPagamento();
    System.out.println("Total da folha de pagamento: " + totalFolha);

    sistemaRH.promoverFuncionario(estagiario, "desenvolvedor");

    totalFolha = folha.calcularFolhaPagamento();
    System.out.println("Total da folha de pagamento após promoção: " + totalFolha);

    
  }

}