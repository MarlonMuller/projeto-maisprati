import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      MaoJogador mao = new MaoJogador();

      while (true) {
          System.out.println("1. Adicionar carta");
          System.out.println("2. Remover carta");
          System.out.println("3. Reorganizar carta");
          System.out.println("4. Mostrar mão");
          System.out.println("5. Sair");

          int opcao = scanner.nextInt();
          scanner.nextLine(); // Consumir nova linha

          switch (opcao) {
              case 1:
                  System.out.println("Digite o valor da carta para adicionar:");
                  String valorAdicionar = scanner.nextLine();
                  mao.adicionarCarta(valorAdicionar);
                  break;
              case 2:
                  System.out.println("Digite o valor da carta para remover:");
                  String valorRemover = scanner.nextLine();
                  mao.removerCarta(valorRemover);
                  break;
              case 3:
                  System.out.println("Digite o valor da carta para reorganizar:");
                  String valorReorganizar = scanner.nextLine();
                  System.out.println("Digite a nova posição (0 para a primeira posição):");
                  int novaPosicao = scanner.nextInt();
                  mao.reorganizarCarta(valorReorganizar, novaPosicao);
                  break;
              case 4:
                  mao.mostrarMao();
                  break;
              case 5:
                  System.out.println("Saindo do jogo...");
                  scanner.close();
                  return;
              default:
                  System.out.println("Opção inválida. Tente novamente.");
                  break;
          }
      }
  }

  


}