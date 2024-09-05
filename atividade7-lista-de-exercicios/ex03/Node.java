class Node {
  private Action action;
  private Node next;

  public Node(Action action){
    this.action = action;
    this.next = null;
  }

  public Action getAction(){
    return action;
  }

  public Node getNext(){
    return next;
  }

  public void setNext(Node next){
    this.next = next;
  }
}