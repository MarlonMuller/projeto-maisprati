public class Main {
  public static void main(String[] args) {
    GerenciadorImpressao gerenciador = new GerenciadorImpressao();
    gerenciador.adicionarArquivo("Calendário.java");
    gerenciador.adicionarArquivo("Agenda.pdf");
    gerenciador.adicionarArquivo("Contrato.pdf");

    gerenciador.chamarproximo();
    gerenciador.chamarproximo();
    gerenciador.chamarproximo();
    gerenciador.chamarproximo();
    gerenciador.chamarproximo();
  }

  
}