import java.util.Queue;
import java.util.LinkedList;

class FilaProcessos {
  private Queue<Processo> fila;
  private int contadorId = 1;

  public FilaProcessos() {
    fila = new LinkedList<>();
  }

  // Adicionar processo na fila
  public void adicionarProcesso(String nome) {
    Processo processo = new Processo(nome, contadorId++);
    fila.add(processo);
    System.out.println("Processo " + processo.getNome() + " adicionado.");
  }

  // Chamar próximo processo
  public void chamarProximo() {
    if (!fila.isEmpty()) {
      Processo processo = fila.poll();
      System.out.println("Executando: " + processo.getNome());
    } else {
      System.out.println("Nenhum processo na fila para executar.");
    }
  }

  // Exibir processos da fila
  public void exibirFila() {
    if (!fila.isEmpty()) {
      System.out.println("Processo na fila:");
      for (Processo processo : fila) {
        System.out.println(processo);
      }
    } else {
      System.out.println("Nenhum processo na fila.");
    }
  }
}