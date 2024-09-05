public class UndoManager {
  private Node head;

  public UndoManager() {
    this.head = null;
  }

  public void addAction(Action action) {
    Node newNode = new Node(action);
    newNode.setNext(head);
    head = newNode;
  }

  public Action undo(){
    if(head == null){
      System.out.println("Não há tarefas para desfazer");
      return null;
    }

    Action lastAction = head.getAction();
    head = head.getNext();
    return lastAction;
  }

  public boolean hasActions(){
    return head != null;
  }
}