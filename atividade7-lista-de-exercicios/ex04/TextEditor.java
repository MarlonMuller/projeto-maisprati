class TextEditor {
  private Node head;
  private Node current;

  public TextEditor(){
    head = new Node("");
    current = head;
  }

  public void insert(String newText){
    Node newNode = new Node(current.text + newText);
    newNode.prev = current;

    current.next = newNode;
    current = newNode;
  }

  public void delete(int length) {
      int endIndex = current.text.length() - length;
      if (endIndex < 0) endIndex = 0;

      Node newNode = new Node(current.text.substring(0, endIndex));
      newNode.prev = current;

      current.next = newNode;
      current = newNode;
  }

  public void undo() {
      if (current.prev != null) {
          current = current.prev;
      } else {
          System.out.println("Nada para desfazer.");
      }
    }

    public void redo() {
      if (current.next != null) {
          current = current.next;
      } else {
          System.out.println("Nada para refazer.");
      }
    }

    public String getText() {
      return current.text;
    }
}