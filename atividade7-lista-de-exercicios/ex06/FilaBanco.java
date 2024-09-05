import java.util.Queue;
import java.util.LinkedList;

class FilaBanco {
  private Queue<Cliente> fila;

  public FilaBanco() {
      fila = new LinkedList<>();
  }

  //Adicionar cliente na fila
  public void adicionarCliente(String nome){
    Cliente cliente = new Cliente(nome);
    fila.add(cliente);
    System.out.println("Cliente " + nome + " adicionado na fila.");
  }

  //Chamar próximo da fila
  public void chamarProximoCliente(){
    if(fila.isEmpty()){
      System.out.println("A fila está vazia.");
    } else {
      Cliente cliente = fila.poll();
      System.out.println("Chamando " + cliente.getNome() + " para atendimento.");
    }
  }
}