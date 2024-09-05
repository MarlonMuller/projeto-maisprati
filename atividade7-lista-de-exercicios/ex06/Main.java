import java.util.Scanner;
public class Main {
  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);
    FilaBanco filaBanco = new FilaBanco();
    int opcao;

    do {
      System.out.println("\n--- Simulador de Fila de Atendimento ---");
      System.out.println("1. Adicionar cliente à fila");
      System.out.println("2. Chamar próximo cliente");
      System.out.println("3. Sair");
      System.out.print("Escolha uma opção: ");
      opcao = scanner.nextInt();
      scanner.nextLine();
      switch (opcao) {
          case 1:
              System.out.print("Digite o nome do cliente: ");
              String nome = scanner.nextLine();
              filaBanco.adicionarCliente(nome);
              break;
          case 2:
              filaBanco.chamarProximoCliente();
              break;
          case 3:
              System.out.println("Encerrando o simulador...");
              break;
          default:
              System.out.println("Opção inválida. Tente novamente.");
      }
    } while (opcao != 3);
    scanner.close();    
  }
}