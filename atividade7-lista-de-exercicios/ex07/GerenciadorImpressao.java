import java.util.Queue;
import java.util.LinkedList;

class GerenciadorImpressao {
  Queue<TrabalhoImpressao> fila;

  public GerenciadorImpressao(){
    fila = new LinkedList<>();
  }

  //Adicionar impressão na fila
  public void adicionarArquivo(String nomeArquivo){
    TrabalhoImpressao trabalho = new TrabalhoImpressao(nomeArquivo);
    fila.add(trabalho);
    System.out.println("O arquivo " + trabalho.getNomeArquivo() + " foi adicionado na fila de impressão.");
  }

  //Chamar próximo da fila para imprimir
  public void chamarproximo(){
    if(fila.isEmpty()){
      System.out.println("A fila está vazia");
    } else {
      TrabalhoImpressao trabalho = fila.poll();
      System.out.println("Arquivo impresso: " + trabalho.getNomeArquivo());
    }
  }
}