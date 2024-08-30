class BrowserHistory {
  private Node head;
  private int size;
  private final int maxSize;

  public BrowserHistory(int maxSize){
    this.head = null;
    this.size = 0;
    this.maxSize = maxSize;
  }

  //Método adicionar url ao histórico
  public void visit(String url){
    Node newNode = new Node(url);
    if(head == null){
      head = newNode;
    } else {
      newNode.next = head;
      head = newNode;
    }
    size++;

    //Remove mais antiga se atingir tamanho máximo
    if(size > maxSize){
      removeOldest();
    }
  }

  //Método para remover caso atija o tamanho
  private void removeOldest(){
    if( head == null || head.next == null){
      head = null;
    } else {
      Node temp = head;
      while(temp.next.next != null){
        temp = temp.next;
      }
      temp.next = null;
    }
    size--;
  }

  //Método para exibir o histórico de navegação
  public void showHistory(){
    if(head == null){
      System.out.println("O histórico está vazio.");
    } else {
      Node temp = head;
      while(temp != null){
        System.out.println(temp.url);
        temp = temp.next;
      }
    }
  }

  
}