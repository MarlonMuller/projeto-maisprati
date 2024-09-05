import java.util.Scanner;
public class Main {
  public static void main(String[] args) {
    FilaProcessos fila = new FilaProcessos();
    Scanner scanner = new Scanner(System.in);
    int opcao;

    do{
      System.out.println("\n1. Acicionar processo");
      System.out.println("\n2. Executar processo");
      System.out.println("\n3. Exibir fila de processos");
      System.out.println("\n0. Sair");
      System.out.println("\nEscolha uma opção: ");
      opcao = scanner.nextInt();
      scanner.nextLine();

      switch(opcao){
        case 1:
          System.out.println("Digite o nome do processo: ");
          String nome = scanner.nextLine();
          fila.adicionarProcesso(nome);
          break;
        case 2:
          fila.chamarProximo();
          break;
        case 3:
          fila.exibirFila();
          break;
        case 0:
          System.out.println("Finalizado.");
          break;
        default:
          System.out.println("Opção inválida.");
      }
    }while(opcao != 0);

    scanner.close();
  
  }

  
}