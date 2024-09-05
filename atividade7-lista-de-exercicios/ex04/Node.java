class Node {
  String text;
  Node prev;
  Node next;

  public Node(String text){
    this.text = text;
    this.prev = null;
    this.next= null;
  }
}